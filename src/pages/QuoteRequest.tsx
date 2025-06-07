import React, { useState } from 'react';
import BaseLayout from '@/components/layouts/BaseLayout';
import { useLocation } from 'react-router-dom';
import {
  ArrowRight,
  ArrowLeft,
  CheckCircle,
  Lock,
  Phone,
  Mail,
  Users,
  User,
  Calendar,
  MapPin,
  CreditCard,
  Building,
  Car
} from 'lucide-react';
import { motion } from 'framer-motion';

// Helper function to get query parameters
const useQuery = () => {
  return new URLSearchParams(useLocation().search);
};

const QuoteRequest = () => {
  const query = useQuery();
  const insuranceType = query.get('tipo') || 'automovil';

  // Form state
  const [step, setStep] = useState(1);
  const [formState, setFormState] = useState({
    // Datos generales
    name: '',
    email: '',
    phone: '',
    insuranceType: insuranceType,
    identification: '',
    birthDate: '',
    address: '',
    message: '',
    agreed: false,
    // Datos específicos de salud
    eps: '',
    // Datos específicos de auto
    vehicleBrand: '',
    vehiclePlate: '',
    vehicleModel: '',
    vehicleUse: 'particular',
    mobilityCity: '',
    isZeroKm: false,
    invoiceValue: '',
    vehicleType: 'sedan',
    cylinderCapacity: '',
    transmission: 'manual',
    hasLien: false,
    financialEntity: '',
    // Datos específicos de hogar
    propertyAddress: '',
    stratum: '',
    commercialValue: '',
    constructionYears: '',
    area: '',
    propertyFloors: '',
    buildingFloors: '',
    basements: '',
    hasSecurity: false,
    isGatedCommunity: false,
    // Datos específicos de vida
    isCreditProtection: false,
    bankEntity: '',
    currentCreditValue: '',
    remainingTerm: '',
    obligationNumber: '',
    // Datos específicos empresariales
    companyName: '',
    businessObject: '',
    contactPerson: '',
    legalRepresentative: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const totalSteps = 4; // Aumentamos a 4 pasos

  // Insurance options data con iconos reales
  const insuranceTypes = [
    { 
      id: 'automovil', 
      name: 'Automóvil', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Autos.png', 
      description: 'Para tu vehículo' 
    },
    { 
      id: 'salud', 
      name: 'Salud', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Salud.png', 
      description: 'Para ti y tu familia' 
    },
    { 
      id: 'hogar', 
      name: 'Hogar', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Hogar.png', 
      description: 'Para tu vivienda' 
    },
    { 
      id: 'vida', 
      name: 'Vida', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Vida.png', 
      description: 'Protección futuro' 
    },
    { 
      id: 'pymes', 
      name: 'PYMES', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Pymes.png', 
      description: 'Para tu negocio' 
    },
    { 
      id: 'cumplimiento', 
      name: 'Cumplimiento', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Cumplimiento.png', 
      description: 'Para contratos' 
    },
    { 
      id: 'transporte', 
      name: 'Transporte', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Transporte.png', 
      description: 'Para tus mercancías' 
    },
    { 
      id: 'arl', 
      name: 'ARL', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png', 
      description: 'Riesgos laborales' 
    },
  ];

  // Find selected insurance
  const selectedInsurance = insuranceTypes.find(type => type.id === formState.insuranceType) || insuranceTypes[0];

  // Form handlers
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (step < totalSteps) {
      setStep(prev => prev + 1);
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  const prevStep = () => {
    setStep(prev => Math.max(prev - 1, 1));
  };

  // Función para determinar si un seguro es empresarial
  const isBusinessInsurance = () => {
    const businessTypes = ['pymes', 'cumplimiento', 'transporte', 'arl'];
    return businessTypes.includes(formState.insuranceType);
  };

  // Función para renderizar campos específicos según el tipo de seguro
  const renderSpecificFields = () => {
    switch (formState.insuranceType) {
      case 'salud':
        return (
          <div>
            <label htmlFor="eps" className="block text-sm font-medium text-gray-700 mb-1">EPS Actual*</label>
            <input
              type="text"
              id="eps"
              name="eps"
              value={formState.eps}
              onChange={handleChange}
              className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
              placeholder="Nombre de tu EPS actual"
              required
            />
          </div>
        );

      case 'automovil':
        return (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="text-lg font-semibold text-avance-blue">Información del Vehículo</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicleBrand" className="block text-sm font-medium text-gray-700 mb-1">Marca y Referencia*</label>
                <input
                  type="text"
                  id="vehicleBrand"
                  name="vehicleBrand"
                  value={formState.vehicleBrand}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: Toyota Corolla"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="vehiclePlate" className="block text-sm font-medium text-gray-700 mb-1">Placa*</label>
                <input
                  type="text"
                  id="vehiclePlate"
                  name="vehiclePlate"
                  value={formState.vehiclePlate}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: ABC123"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="vehicleModel" className="block text-sm font-medium text-gray-700 mb-1">Modelo*</label>
                <input
                  type="number"
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formState.vehicleModel}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 2023"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="vehicleUse" className="block text-sm font-medium text-gray-700 mb-1">Uso del Vehículo*</label>
                <select
                  id="vehicleUse"
                  name="vehicleUse"
                  value={formState.vehicleUse}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  required
                >
                  <option value="particular">Particular</option>
                  <option value="publico">Público</option>
                  <option value="empresarial">Empresarial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="mobilityCity" className="block text-sm font-medium text-gray-700 mb-1">Ciudad de Movilización*</label>
                <input
                  type="text"
                  id="mobilityCity"
                  name="mobilityCity"
                  value={formState.mobilityCity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: Medellín"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700 mb-1">Tipo de Vehículo*</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formState.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  required
                >
                  <option value="sedan">Sedan</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="cylinderCapacity" className="block text-sm font-medium text-gray-700 mb-1">Cilindraje*</label>
                <input
                  type="text"
                  id="cylinderCapacity"
                  name="cylinderCapacity"
                  value={formState.cylinderCapacity}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 1600cc"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="transmission" className="block text-sm font-medium text-gray-700 mb-1">Transmisión*</label>
                <select
                  id="transmission"
                  name="transmission"
                  value={formState.transmission}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  required
                >
                  <option value="manual">Manual</option>
                  <option value="automatico">Automático</option>
                </select>
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isZeroKm"
                  name="isZeroKm"
                  checked={formState.isZeroKm}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="isZeroKm" className="ml-3 text-sm text-gray-700">
                  ¿Es vehículo 0 KM?
                </label>
              </div>

              {formState.isZeroKm && (
                <div>
                  <label htmlFor="invoiceValue" className="block text-sm font-medium text-gray-700 mb-1">Valor de Factura*</label>
                  <input
                    type="text"
                    id="invoiceValue"
                    name="invoiceValue"
                    value={formState.invoiceValue}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                    placeholder="Ej: $45.000.000"
                    required
                  />
                </div>
              )}

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasLien"
                  name="hasLien"
                  checked={formState.hasLien}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="hasLien" className="ml-3 text-sm text-gray-700">
                  ¿Tiene prenda?
                </label>
              </div>

              {formState.hasLien && (
                <div>
                  <label htmlFor="financialEntity" className="block text-sm font-medium text-gray-700 mb-1">Entidad Financiera*</label>
                  <input
                    type="text"
                    id="financialEntity"
                    name="financialEntity"
                    value={formState.financialEntity}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                    placeholder="Ej: Banco de Bogotá"
                    required
                  />
                </div>
              )}
            </div>
          </div>
        );

      case 'hogar':
        return (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="text-lg font-semibold text-avance-blue">Información del Inmueble</h4>
            </div>
            
            <div>
              <label htmlFor="propertyAddress" className="block text-sm font-medium text-gray-700 mb-1">Dirección del Inmueble*</label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formState.propertyAddress}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                placeholder="Dirección completa del inmueble"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="stratum" className="block text-sm font-medium text-gray-700 mb-1">Estrato*</label>
                <select
                  id="stratum"
                  name="stratum"
                  value={formState.stratum}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  required
                >
                  <option value="">Seleccionar estrato</option>
                  <option value="1">Estrato 1</option>
                  <option value="2">Estrato 2</option>
                  <option value="3">Estrato 3</option>
                  <option value="4">Estrato 4</option>
                  <option value="5">Estrato 5</option>
                  <option value="6">Estrato 6</option>
                </select>
              </div>
              
              <div>
                <label htmlFor="commercialValue" className="block text-sm font-medium text-gray-700 mb-1">Valor Comercial*</label>
                <input
                  type="text"
                  id="commercialValue"
                  name="commercialValue"
                  value={formState.commercialValue}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: $300.000.000"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="constructionYears" className="block text-sm font-medium text-gray-700 mb-1">Años de Construcción*</label>
                <input
                  type="number"
                  id="constructionYears"
                  name="constructionYears"
                  value={formState.constructionYears}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 15"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-700 mb-1">Área (m²)*</label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formState.area}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 120 m²"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div>
                <label htmlFor="propertyFloors" className="block text-sm font-medium text-gray-700 mb-1">Pisos del Inmueble*</label>
                <input
                  type="number"
                  id="propertyFloors"
                  name="propertyFloors"
                  value={formState.propertyFloors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 2"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="buildingFloors" className="block text-sm font-medium text-gray-700 mb-1">Pisos del Edificio</label>
                <input
                  type="number"
                  id="buildingFloors"
                  name="buildingFloors"
                  value={formState.buildingFloors}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 10"
                />
              </div>
              
              <div>
                <label htmlFor="basements" className="block text-sm font-medium text-gray-700 mb-1">Número de Sótanos</label>
                <input
                  type="number"
                  id="basements"
                  name="basements"
                  value={formState.basements}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Ej: 1"
                />
              </div>
            </div>

            <div className="space-y-4">
              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="hasSecurity"
                  name="hasSecurity"
                  checked={formState.hasSecurity}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="hasSecurity" className="ml-3 text-sm text-gray-700">
                  ¿Cuenta con vigilancia?
                </label>
              </div>

              <div className="flex items-center">
                <input
                  type="checkbox"
                  id="isGatedCommunity"
                  name="isGatedCommunity"
                  checked={formState.isGatedCommunity}
                  onChange={handleChange}
                  className="h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="isGatedCommunity" className="ml-3 text-sm text-gray-700">
                  ¿Es unidad cerrada?
                </label>
              </div>
            </div>
          </div>
        );

      case 'vida':
        return (
          <div className="space-y-6">
            <div className="flex items-center">
              <input
                type="checkbox"
                id="isCreditProtection"
                name="isCreditProtection"
                checked={formState.isCreditProtection}
                onChange={handleChange}
                className="h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
              />
              <label htmlFor="isCreditProtection" className="ml-3 text-sm font-medium text-gray-700">
                ¿Es para plan crédito protegido?
              </label>
            </div>

            {formState.isCreditProtection && (
              <div className="space-y-6 p-6 bg-gray-50 rounded-lg">
                <h4 className="text-lg font-semibold text-avance-blue">Información del Crédito</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="bankEntity" className="block text-sm font-medium text-gray-700 mb-1">Entidad Bancaria*</label>
                    <input
                      type="text"
                      id="bankEntity"
                      name="bankEntity"
                      value={formState.bankEntity}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                      placeholder="Ej: Banco de Bogotá"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentCreditValue" className="block text-sm font-medium text-gray-700 mb-1">Valor Actual del Crédito*</label>
                    <input
                      type="text"
                      id="currentCreditValue"
                      name="currentCreditValue"
                      value={formState.currentCreditValue}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                      placeholder="Ej: $85.000.000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="remainingTerm" className="block text-sm font-medium text-gray-700 mb-1">Plazo Faltante*</label>
                    <input
                      type="text"
                      id="remainingTerm"
                      name="remainingTerm"
                      value={formState.remainingTerm}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                      placeholder="Ej: 8 años"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="obligationNumber" className="block text-sm font-medium text-gray-700 mb-1">Número de Obligación*</label>
                    <input
                      type="text"
                      id="obligationNumber"
                      name="obligationNumber"
                      value={formState.obligationNumber}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                      placeholder="Número de la obligación"
                      required
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
        );

      default:
        if (isBusinessInsurance()) {
          return (
            <div className="space-y-6">
              <div className="border-b pb-4">
                <h4 className="text-lg font-semibold text-avance-blue">Información de la Empresa</h4>
              </div>
              
              <div>
                <label htmlFor="companyName" className="block text-sm font-medium text-gray-700 mb-1">Razón Social*</label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  value={formState.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                  placeholder="Nombre completo de la empresa"
                  required
                />
              </div>

              <div>
                <label htmlFor="businessObject" className="block text-sm font-medium text-gray-700 mb-1">Objeto Social*</label>
                <textarea
                  id="businessObject"
                  name="businessObject"
                  value={formState.businessObject}
                  onChange={handleChange}
                  rows={3}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent resize-none"
                  placeholder="Descripción del objeto social de la empresa"
                  required
                ></textarea>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contactPerson" className="block text-sm font-medium text-gray-700 mb-1">Persona de Contacto*</label>
                  <input
                    type="text"
                    id="contactPerson"
                    name="contactPerson"
                    value={formState.contactPerson}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                    placeholder="Nombre de la persona de contacto"
                    required
                  />
                </div>
                
                <div>
                  <label htmlFor="legalRepresentative" className="block text-sm font-medium text-gray-700 mb-1">Representante Legal*</label>
                  <input
                    type="text"
                    id="legalRepresentative"
                    name="legalRepresentative"
                    value={formState.legalRepresentative}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                    placeholder="Nombre del representante legal"
                    required
                  />
                </div>
              </div>
            </div>
          );
        }
        return null;
    }
  };

  const getStepTitle = () => {
    switch(step) {
      case 1: return 'Tipo de seguro';
      case 2: return 'Información personal';
      case 3: return 'Información específica';
      case 4: return 'Detalles adicionales';
      default: return '';
    }
  };

  return (
    <BaseLayout>
      <section className="py-20 bg-gradient-to-b from-avance-blue to-avance-blue-dark text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>

        <div className="container-custom relative z-10">
         <motion.div
           initial={{ opacity: 0, y: 20 }}
           animate={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.6 }}
           className="max-w-4xl mx-auto"
         >
           <div className="text-center mb-10">
             <h1 className="text-4xl md:text-5xl font-bold mb-4">
               Solicitar cotización
             </h1>
             <p className="text-xl text-white/90">
               Completa el formulario y recibe una cotización personalizada según tus necesidades.
             </p>
           </div>

           {!isSubmitted ? (
             <div className="bg-white text-gray-800 rounded-xl shadow-xl overflow-hidden">
               {/* Progress indicator */}
               <div className="bg-avance-lightblue p-4">
                 <div className="flex items-center justify-between">
                   <div className="text-avance-blue font-medium">
                     {getStepTitle()}
                   </div>
                   <div className="flex items-center space-x-2">
                     {Array.from({ length: totalSteps }).map((_, index) => (
                       <div
                         key={index}
                         className={`h-2 rounded-full transition-all ${index + 1 <= step ? 'bg-avance-gold w-8' : 'bg-gray-200 w-5'}`}
                       />
                     ))}
                   </div>
                 </div>
               </div>

               {/* Form content */}
               <form onSubmit={handleSubmit} className="p-8">
                 {/* Step 1: Insurance Type */}
                 {step === 1 && (
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="space-y-6"
                   >
                     <h2 className="text-2xl font-bold text-avance-blue mb-6">¿Qué tipo de seguro necesitas?</h2>

                     <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                       {insuranceTypes.map((type) => (
                         <label
                           key={type.id}
                           htmlFor={`insurance-${type.id}`}
                           className={`cursor-pointer flex flex-col items-center justify-center h-32 border p-4 rounded-xl transition-all ${
                             formState.insuranceType === type.id
                               ? 'border-avance-blue bg-avance-lightblue'
                               : 'border-gray-200 hover:border-gray-300 hover:bg-gray-50'
                           }`}
                         >
                           <input
                             type="radio"
                             id={`insurance-${type.id}`}
                             name="insuranceType"
                             value={type.id}
                             checked={formState.insuranceType === type.id}
                             onChange={handleChange}
                             className="sr-only"
                           />
                           <div className="w-8 h-8 mb-3 flex items-center justify-center">
                             <img 
                               src={type.iconSrc} 
                               alt={`${type.name} icon`}
                               className="w-full h-full object-contain"
                             />
                           </div>
                           <span className={`text-sm font-medium text-center ${formState.insuranceType === type.id ? 'text-avance-blue' : 'text-gray-700'}`}>
                             {type.name}
                           </span>
                           <span className={`text-xs text-center ${formState.insuranceType === type.id ? 'text-avance-blue/70' : 'text-gray-500'}`}>
                             {type.description}
                           </span>
                         </label>
                       ))}
                     </div>
                   </motion.div>
                 )}

                 {/* Step 2: Personal Information */}
                 {step === 2 && (
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="space-y-6"
                   >
                     <h2 className="text-2xl font-bold text-avance-blue mb-6">
                       {isBusinessInsurance() ? 'Datos del Tomador' : 'Tus datos de contacto'}
                     </h2>

                     <div className="grid gap-6">
                       <div>
                         <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                           {isBusinessInsurance() ? 'Nombre del Contacto*' : 'Nombre completo*'}
                         </label>
                         <div className="relative">
                           <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                           <input
                             type="text"
                             id="name"
                             name="name"
                             value={formState.name}
                             onChange={handleChange}
                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                             placeholder="Ingresa tu nombre completo"
                             required
                           />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                           <label htmlFor="identification" className="block text-sm font-medium text-gray-700 mb-1">
                             {isBusinessInsurance() ? 'NIT*' : 'Identificación*'}
                           </label>
                           <div className="relative">
                             <CreditCard className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                             <input
                               type="text"
                               id="identification"
                               name="identification"
                               value={formState.identification}
                               onChange={handleChange}
                               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                               placeholder={isBusinessInsurance() ? "Ej: 900123456-1" : "Ej: 1234567890"}
                               required
                             />
                           </div>
                         </div>
                         
                         {!isBusinessInsurance() && (
                           <div>
                             <label htmlFor="birthDate" className="block text-sm font-medium text-gray-700 mb-1">Fecha de Nacimiento*</label>
                             <div className="relative">
                               <Calendar className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                               <input
                                 type="date"
                                 id="birthDate"
                                 name="birthDate"
                                 value={formState.birthDate}
                                 onChange={handleChange}
                                 className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                                 required
                               />
                             </div>
                           </div>
                         )}
                       </div>

                       <div>
                         <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-1">Dirección*</label>
                         <div className="relative">
                           <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                           <input
                             type="text"
                             id="address"
                             name="address"
                             value={formState.address}
                             onChange={handleChange}
                             className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                             placeholder="Dirección completa"
                             required
                           />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                         <div>
                           <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Teléfono*</label>
                           <div className="relative">
                             <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                             <input
                               type="tel"
                               id="phone"
                               name="phone"
                               value={formState.phone}
                               onChange={handleChange}
                               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                               placeholder="Ej: 312 282 9850"
                               required
                             />
                           </div>
                         </div>
                         
                         <div>
                           <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico*</label>
                           <div className="relative">
                             <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                             <input
                               type="email"
                               id="email"
                               name="email"
                               value={formState.email}
                               onChange={handleChange}
                               className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                               placeholder="correo@ejemplo.com"
                               required
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 )}

                 {/* Step 3: Specific Information */}
                 {step === 3 && (
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="space-y-6"
                   >
                     <h2 className="text-2xl font-bold text-avance-blue mb-6">Información específica</h2>

                     <div className="bg-avance-lightblue p-4 rounded-lg mb-6">
                       <div className="flex items-center">
                         <div className="w-6 h-6 mr-3 flex items-center justify-center">
                           <img 
                             src={selectedInsurance.iconSrc} 
                             alt={`${selectedInsurance.name} icon`}
                             className="w-full h-full object-contain"
                           />
                         </div>
                         <div>
                           <span className="text-avance-blue font-medium">Seguro seleccionado:</span>
                           <span className="ml-2">{selectedInsurance.name}</span>
                         </div>
                       </div>
                     </div>

                     {renderSpecificFields()}
                   </motion.div>
                 )}

                 {/* Step 4: Additional Details */}
                 {step === 4 && (
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.3 }}
                     className="space-y-6"
                   >
                     <h2 className="text-2xl font-bold text-avance-blue mb-6">Información adicional</h2>

                     <div>
                       <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">¿Algún requisito específico o detalle que debamos considerar?</label>
                       <textarea
                         id="message"
                         name="message"
                         value={formState.message}
                         onChange={handleChange}
                         rows={4}
                         className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-avance-blue focus:border-transparent"
                         placeholder="Cuéntanos sobre tus necesidades específicas..."
                       ></textarea>
                     </div>

                     <div className="mt-6 flex items-start">
                       <input
                         type="checkbox"
                         id="agreed"
                         name="agreed"
                         checked={formState.agreed}
                         onChange={handleChange}
                         className="mt-1 h-4 w-4 border-gray-300 rounded focus:ring-avance-blue"
                         required
                       />
                       <label htmlFor="agreed" className="ml-3 text-sm text-gray-600">
                         Acepto la <a href="/politica-privacidad" className="text-avance-blue hover:underline">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales
                       </label>
                     </div>
                   </motion.div>
                 )}

                 {/* Navigation buttons */}
                 <div className="mt-8 flex justify-between">
                   {step > 1 ? (
                     <button
                       type="button"
                       onClick={prevStep}
                       className="px-6 py-3 border border-gray-300 rounded-lg text-gray-700 hover:bg-gray-50 transition-all flex items-center"
                     >
                       <ArrowLeft className="mr-2" size={18} />
                       Anterior
                     </button>
                   ) : (
                     <div></div>
                   )}

                   <button
                     type="submit"
                     disabled={isSubmitting}
                     className="px-6 py-3 bg-avance-blue text-white rounded-lg hover:bg-avance-blue-light transition-all flex items-center"
                   >
                     {isSubmitting ? 'Procesando...' : step < totalSteps ? 'Continuar' : 'Solicitar cotización'}
                     {!isSubmitting && <ArrowRight className="ml-2" size={18} />}
                   </button>
                 </div>

                 {/* Security indicators */}
                 <div className="mt-8 flex items-center justify-center text-gray-500 text-xs">
                   <Lock size={14} className="mr-1" />
                   <span>Conexión segura</span>
                   <span className="mx-2">•</span>
                   <span>Datos protegidos</span>
                 </div>
               </form>
             </div>
           ) : (
             <div className="bg-white text-gray-800 rounded-xl shadow-xl p-10 text-center">
               <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                 <CheckCircle className="text-green-600" size={40} />
               </div>
               <h2 className="text-3xl font-bold text-avance-blue mb-4">¡Solicitud enviada correctamente!</h2>
               <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                 Gracias por tu interés en nuestros servicios. Uno de nuestros asesores se pondrá en contacto contigo en un plazo máximo de 24 horas para proporcionarte una cotización personalizada.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 justify-center">
                 <a href="/" className="px-6 py-3 bg-avance-blue text-white rounded-lg hover:bg-avance-blue-light transition-colors">
                   Volver al inicio
                 </a>
                 <button
                   onClick={() => {
                     setFormState({
                       name: '', email: '', phone: '', insuranceType: 'automovil',
                       identification: '', birthDate: '', address: '', message: '', agreed: false,
                       eps: '', vehicleBrand: '', vehiclePlate: '', vehicleModel: '',
                       vehicleUse: 'particular', mobilityCity: '', isZeroKm: false,
                       invoiceValue: '', vehicleType: 'sedan', cylinderCapacity: '',
                       transmission: 'manual', hasLien: false, financialEntity: '',
                       propertyAddress: '', stratum: '', commercialValue: '',
                       constructionYears: '', area: '', propertyFloors: '',
                       buildingFloors: '', basements: '', hasSecurity: false,
                       isGatedCommunity: false, isCreditProtection: false,
                       bankEntity: '', currentCreditValue: '', remainingTerm: '',
                       obligationNumber: '', companyName: '', businessObject: '',
                       contactPerson: '', legalRepresentative: ''
                     });
                     setStep(1);
                     setIsSubmitted(false);
                   }}
                   className="px-6 py-3 border border-avance-blue text-avance-blue rounded-lg hover:bg-avance-lightblue transition-colors"
                 >
                   Solicitar otra cotización
                 </button>
               </div>
             </div>
           )}
         </motion.div>
       </div>
     </section>

     {/* Benefits Section */}
     <section className="py-16 bg-white">
       <div className="container-custom">
         <div className="max-w-4xl mx-auto">
           <div className="text-center mb-12">
             <h2 className="text-3xl font-bold text-avance-blue mb-6">¿Por qué elegir Avance Seguros?</h2>
             <p className="text-gray-600">
               En Avance Seguros te ofrecemos un servicio personalizado para encontrar la protección que realmente necesitas al mejor precio.
             </p>
           </div>

           <div className="grid md:grid-cols-3 gap-8">
             <div className="text-center bg-avance-lightblue p-6 rounded-xl">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                 <CheckCircle size={32} />
               </div>
               <h3 className="text-xl font-semibold text-avance-blue mb-3">Comparamos por ti</h3>
               <p className="text-gray-600">
                 Analizamos ofertas de múltiples aseguradoras para encontrar la mejor opción.
               </p>
             </div>

             <div className="text-center bg-avance-lightblue p-6 rounded-xl">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                 <Users size={32} />
               </div>
               <h3 className="text-xl font-semibold text-avance-blue mb-3">Asesoría personalizada</h3>
               <p className="text-gray-600">
                 Te acompañamos durante todo el proceso para resolver tus dudas.
               </p>
             </div>

             <div className="text-center bg-avance-lightblue p-6 rounded-xl">
               <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center text-avance-blue mx-auto mb-4">
                 <img 
                   src="https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png" 
                   alt="Respaldo y confianza"
                   className="w-8 h-8 object-contain"
                 />
               </div>
               <h3 className="text-xl font-semibold text-avance-blue mb-3">Respaldo y confianza</h3>
               <p className="text-gray-600">
                 Trabajamos con las compañías aseguradoras más reconocidas del mercado.
               </p>
             </div>
           </div>

           <div className="mt-12 bg-avance-blue text-white p-8 rounded-xl text-center">
             <h3 className="text-2xl font-bold mb-4">¿Necesitas ayuda inmediata?</h3>
             <p className="mb-6">
               Si prefieres hablar directamente con uno de nuestros asesores, puedes contactarnos por teléfono o WhatsApp.
             </p>
             <div className="flex flex-col sm:flex-row gap-4 justify-center">
               <a
                 href="tel:+573122829850"
                 className="inline-flex items-center justify-center px-6 py-3 bg-white text-avance-blue rounded-lg hover:bg-gray-100 transition-colors"
               >
                 <Phone className="mr-2" size={18} />
                 (312) 282 98 50
               </a>
               <a
                 href="https://wa.me/573122829850"
                 className="inline-flex items-center justify-center px-6 py-3 bg-avance-gold text-white rounded-lg hover:bg-avance-gold-light transition-colors"
               >
                 Contactar por WhatsApp
                 <ArrowRight className="ml-2" size={18} />
               </a>
             </div>
           </div>
         </div>
       </div>
     </section>
   </BaseLayout>
 );
};

export default QuoteRequest;
