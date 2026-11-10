/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 * ESMERALDA INTELIGENTE JAIRRESTAURA
 * Plataforma Universal del Sector Esmeraldero Colombiano
 */

import React, { useState, useEffect } from 'react';
import { EmeraldStone, CuttingWorkOrder, CommercialQuote, TradeOperation, DirectoryProfile, AIAssistantId } from './types';
import { Info, X } from 'lucide-react';
import { StorageService } from './services/storage';
import { Header } from './components/common/Header';
import { Footer } from './components/common/Footer';
import { HomeDashboard } from './components/home/HomeDashboard';
import { InventoryList } from './components/inventory/InventoryList';
import { EmeraldFormModal } from './components/inventory/EmeraldFormModal';
import { DigitalPassportModal } from './components/passport/DigitalPassportModal';
import { ValuationCalculator } from './components/valuation/ValuationCalculator';
import { CommerceModule } from './components/commerce/CommerceModule';
import { CuttingWorkOrders } from './components/cutting/CuttingWorkOrders';
import { AIAssistantsCenter } from './components/ai/AIAssistantsCenter';
import { EmeraldAcademy } from './components/academy/EmeraldAcademy';
import { SectorDirectory } from './components/directory/SectorDirectory';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('academia');
  
  // Data state
  const [emeralds, setEmeralds] = useState<EmeraldStone[]>([]);
  const [workOrders, setWorkOrders] = useState<CuttingWorkOrder[]>([]);
  const [quotes, setQuotes] = useState<CommercialQuote[]>([]);
  const [operations, setOperations] = useState<TradeOperation[]>([]);
  const [directory, setDirectory] = useState<DirectoryProfile[]>([]);

  // Modals state
  const [isFormModalOpen, setIsFormModalOpen] = useState(false);
  const [stoneToEdit, setStoneToEdit] = useState<EmeraldStone | null>(null);
  
  const [isPassportModalOpen, setIsPassportModalOpen] = useState(false);
  const [selectedPassportStone, setSelectedPassportStone] = useState<EmeraldStone | null>(null);

  // Valuation context
  const [valuationInitialStone, setValuationInitialStone] = useState<EmeraldStone | null>(null);
  const [notFoundPassportId, setNotFoundPassportId] = useState<string | null>(null);

  // Initial load and event listeners
  const loadAllData = () => {
    setEmeralds(StorageService.getEmeralds());
    setWorkOrders(StorageService.getWorkOrders());
    setQuotes(StorageService.getQuotes());
    setOperations(StorageService.getOperations());
    setDirectory(StorageService.getDirectory());
  };

  useEffect(() => {
    loadAllData();

    const handleDataUpdate = () => loadAllData();
    window.addEventListener('jairrestaura:emeralds-updated', handleDataUpdate);
    window.addEventListener('jairrestaura:orders-updated', handleDataUpdate);
    window.addEventListener('jairrestaura:quotes-updated', handleDataUpdate);
    window.addEventListener('jairrestaura:operations-updated', handleDataUpdate);
    window.addEventListener('jairrestaura:directory-updated', handleDataUpdate);

    // Hash router check for #pasaporte/{id} and #certificado/{serial}
    const checkHash = () => {
      const hash = window.location.hash;
      if (hash.startsWith('#pasaporte/')) {
        const id = decodeURIComponent(hash.replace('#pasaporte/', ''));
        const stone = StorageService.getEmeraldById(id);
        if (stone) {
          setSelectedPassportStone(stone);
          setIsPassportModalOpen(true);
          setNotFoundPassportId(null);
        } else {
          setNotFoundPassportId(id);
        }
      } else if (hash.startsWith('#certificado/')) {
        setCurrentTab('academia');
      }
    };
    checkHash();
    window.addEventListener('hashchange', checkHash);

    return () => {
      window.removeEventListener('jairrestaura:emeralds-updated', handleDataUpdate);
      window.removeEventListener('jairrestaura:orders-updated', handleDataUpdate);
      window.removeEventListener('jairrestaura:quotes-updated', handleDataUpdate);
      window.removeEventListener('jairrestaura:operations-updated', handleDataUpdate);
      window.removeEventListener('jairrestaura:directory-updated', handleDataUpdate);
      window.removeEventListener('hashchange', checkHash);
    };
  }, []);

  const handleOpenPassport = (stone: EmeraldStone) => {
    setSelectedPassportStone(stone);
    setIsPassportModalOpen(true);
    window.location.hash = `#pasaporte/${encodeURIComponent(stone.id)}`;
  };

  const handleClosePassport = () => {
    setIsPassportModalOpen(false);
    setSelectedPassportStone(null);
    if (window.location.hash.startsWith('#pasaporte/')) {
      history.pushState(null, '', window.location.pathname);
    }
  };

  const handleOpenValuation = (stone: EmeraldStone) => {
    setValuationInitialStone(stone);
    setCurrentTab('valoracion');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenEdit = (stone: EmeraldStone) => {
    setStoneToEdit(stone);
    setIsFormModalOpen(true);
  };

  const handleNewEmerald = () => {
    setStoneToEdit(null);
    setIsFormModalOpen(true);
  };

  const handleSaveEmerald = (stone: EmeraldStone, reason?: string) => {
    return StorageService.saveEmerald(stone, reason);
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 text-slate-100 antialiased font-sans selection:bg-emerald-500 selection:text-white">
      
      {/* Top Header */}
      <Header
        currentTab={currentTab}
        onSelectTab={(tab) => {
          setCurrentTab(tab);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
        onNewEmerald={handleNewEmerald}
        onOpenPassportLookup={() => {
          const id = prompt('Ingresa el código único de la esmeralda (ej. EMR-2025-001):');
          if (id) {
            const stone = StorageService.getEmeraldById(id.trim());
            if (stone) {
              handleOpenPassport(stone);
            } else {
              alert(`No se encontró ninguna esmeralda con el código ${id}`);
            }
          }
        }}
      />

      {/* Main Container */}
      <main className="flex-1 max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8 py-6 sm:py-8">
        {currentTab === 'inicio' && (
          <HomeDashboard
            emeralds={emeralds}
            workOrders={workOrders}
            quotes={quotes}
            operations={operations}
            onSelectTab={setCurrentTab}
            onOpenPassport={handleOpenPassport}
            onOpenValuation={handleOpenValuation}
            onNewEmerald={handleNewEmerald}
          />
        )}

        {currentTab === 'inventario' && (
          <InventoryList
            emeralds={emeralds}
            onOpenPassport={handleOpenPassport}
            onOpenValuation={handleOpenValuation}
            onOpenEdit={handleOpenEdit}
            onNewEmerald={handleNewEmerald}
          />
        )}

        {currentTab === 'pasaporte' && (
          <div className="space-y-6">
            <div className="p-6 bg-slate-900 border border-emerald-950 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
              <div>
                <h2 className="text-xl font-bold text-white font-emerald-heading">
                  Pasaporte Digital & Código QR
                </h2>
                <p className="text-xs text-slate-400 mt-1">
                  Selecciona una esmeralda de tu inventario para generar su ficha técnica imprimible y código de verificación.
                </p>
              </div>
            </div>

            <InventoryList
              emeralds={emeralds}
              onOpenPassport={handleOpenPassport}
              onOpenValuation={handleOpenValuation}
              onOpenEdit={handleOpenEdit}
              onNewEmerald={handleNewEmerald}
            />
          </div>
        )}

        {currentTab === 'valoracion' && (
          <ValuationCalculator
            initialStone={valuationInitialStone}
            allStones={emeralds}
          />
        )}

        {currentTab === 'comercio' && (
          <CommerceModule
            quotes={quotes}
            operations={operations}
            emeralds={emeralds}
          />
        )}

        {currentTab === 'taller' && (
          <CuttingWorkOrders
            orders={workOrders}
            emeralds={emeralds}
          />
        )}

        {currentTab === 'ai' && (
          <AIAssistantsCenter
            emeralds={emeralds}
            initialStone={valuationInitialStone}
          />
        )}

        {currentTab === 'academia' && (
          <EmeraldAcademy />
        )}

        {currentTab === 'directorio' && (
          <SectorDirectory
            directory={directory}
          />
        )}
      </main>

      {/* Footer */}
      <Footer onSelectTab={setCurrentTab} />

      {/* Digital Passport Modal with QR */}
      <DigitalPassportModal
        stone={selectedPassportStone}
        isOpen={isPassportModalOpen}
        onClose={handleClosePassport}
        onOpenValuation={handleOpenValuation}
      />

      {/* Emerald Creation & Edit Form Modal */}
      <EmeraldFormModal
        isOpen={isFormModalOpen}
        stoneToEdit={stoneToEdit}
        onClose={() => {
          setIsFormModalOpen(false);
          setStoneToEdit(null);
        }}
        onSave={handleSaveEmerald}
      />

      {/* Local Storage Limitation Notice for Scanned QR on Another Device */}
      {notFoundPassportId && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm animate-fade-in">
          <div className="relative w-full max-w-md bg-slate-900 border border-amber-800/80 rounded-2xl p-6 shadow-2xl space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5 text-amber-400 font-bold font-emerald-heading text-base">
                <Info className="w-5 h-5 shrink-0" />
                <span>Pasaporte Local No Encontrado</span>
              </div>
              <button
                onClick={() => {
                  setNotFoundPassportId(null);
                  if (window.location.hash.startsWith('#pasaporte/')) {
                    history.pushState(null, '', window.location.pathname);
                  }
                }}
                className="text-slate-400 hover:text-white"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="text-xs text-slate-300 space-y-2 leading-relaxed">
              <p>
                La esmeralda con código <strong className="text-amber-300 font-mono">{notFoundPassportId}</strong> no se encuentra en el almacenamiento local de este navegador.
              </p>
              <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-[11px] text-slate-400">
                <strong>¿Por qué ocurre esto?</strong> Por privacidad y soberanía de datos, la plataforma almacena tus inventarios exclusivamente en el navegador local del usuario sin servidores centrales de terceros.
              </div>
              <p className="text-[11px] text-slate-400">
                Para consultar esta pieza en este dispositivo, solicita al propietario que exporte una copia de seguridad en formato JSON (botón Respaldo en la barra superior) y cárgala en este equipo.
              </p>
            </div>

            <div className="pt-2 flex justify-end">
              <button
                onClick={() => {
                  setNotFoundPassportId(null);
                  if (window.location.hash.startsWith('#pasaporte/')) {
                    history.pushState(null, '', window.location.pathname);
                  }
                }}
                className="px-4 py-2 bg-emerald-700 hover:bg-emerald-600 text-white font-bold text-xs rounded-xl transition-colors"
              >
                Entendido
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
