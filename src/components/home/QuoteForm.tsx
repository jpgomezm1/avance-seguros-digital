import { useState } from 'react';
import { useToast } from '@/hooks/use-toast';
import { 
  ArrowRight, CheckCircle, Phone, Mail, CalendarClock, Lock, 
  Sparkles, Star, User, Calendar, MapPin, CreditCard, Building, Car
} from 'lucide-react';
import { motion } from 'framer-motion';

const QuoteForm = () => {
  const { toast } = useToast();
  const [formState, setFormState] = useState({
    // Datos generales
    insuranceType: 'salud',
    // Datos personales básicos
    name: '',
    identification: '',
    birthDate: '',
    address: '',
    phone: '',
    email: '',
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
    legalRepresentative: '',
    // Mensaje general
    message: '',
    agreed: false
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState(1);
  const totalSteps = 3; // Aumentamos a 3 pasos

  // Tipos de seguros con imágenes
  const personalInsurance = [
    { 
      id: 'salud', 
      name: 'Salud', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Salud.png', 
      description: 'Para ti y tu familia'
    },
    { 
      id: 'vida', 
      name: 'Vida', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Vida.png', 
      description: 'Protección futura'
    },
    { 
      id: 'hogar', 
      name: 'Hogar', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Hogar.png', 
      description: 'Para tu vivienda'
    },
    { 
      id: 'movilidad', 
      name: 'Movilidad', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Autos.png', 
      description: 'Para tu vehículo'
    },
    { 
      id: 'mascotas', 
      name: 'Mascotas', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Mascotas.png', 
      description: 'Para tus mascotas'
    }
  ];

  const businessInsurance = [
    { 
      id: 'corporativos-pymes', 
      name: 'Corporativos y PYMES', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Pymes.png', 
      description: 'Para tu negocio'
    },
    { 
      id: 'responsabilidad-civil', 
      name: 'Responsabilidad Civil', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Responsabilidad_Civil.png', 
      description: 'Protección legal'
    },
    { 
      id: 'transporte', 
      name: 'Transporte', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Transporte.png', 
      description: 'Para mercancías'
    },
    { 
      id: 'todo-riesgo-construccion', 
      name: 'Todo Riesgo Construcción', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Todo_Riesgo.png', 
      description: 'Para obras'
    },
    { 
      id: 'cumplimiento', 
      name: 'Cumplimiento', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/Cumplimiento.png', 
      description: 'Para contratos'
    },
    { 
      id: 'arl', 
      name: 'ARL', 
      iconSrc: 'https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png', 
      description: 'Riesgos laborales'
    }
  ];

  const [activeCategory, setActiveCategory] = useState('personal');
  const currentInsuranceTypes = activeCategory === 'personal' ? personalInsurance : businessInsurance;

  const handleChange = (e) => {
    const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
    
    setFormState({
      ...formState,
      [e.target.name]: value,
    });
  };

  const nextStep = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    }
  };

  const prevStep = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (step < totalSteps) {
      nextStep();
      return;
    }
    
    setIsSubmitting(true);
    
    try {
      console.log('Form submitted:', formState);
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      toast({
        title: "¡Solicitud recibida!",
        description: "Un asesor especializado se pondrá en contacto contigo en menos de 24 horas.",
        duration: 5000,
      });
      
      // Reset form
      setFormState({
        insuranceType: 'salud',
        name: '', identification: '', birthDate: '', address: '', phone: '', email: '',
        eps: '', vehicleBrand: '', vehiclePlate: '', vehicleModel: '', vehicleUse: 'particular',
        mobilityCity: '', isZeroKm: false, invoiceValue: '', vehicleType: 'sedan',
        cylinderCapacity: '', transmission: 'manual', hasLien: false, financialEntity: '',
        propertyAddress: '', stratum: '', commercialValue: '', constructionYears: '',
        area: '', propertyFloors: '', buildingFloors: '', basements: '',
        hasSecurity: false, isGatedCommunity: false, isCreditProtection: false,
        bankEntity: '', currentCreditValue: '', remainingTerm: '', obligationNumber: '',
        companyName: '', businessObject: '', contactPerson: '', legalRepresentative: '',
        message: '', agreed: false
      });
      
      setStep(1);
    } catch (error) {
      toast({
        title: "Error al enviar",
        description: "Ha ocurrido un error. Por favor intenta nuevamente.",
        variant: "destructive",
        duration: 5000,
      });
      console.error(error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const selectedInsurance = [...personalInsurance, ...businessInsurance].find(
    type => type.id === formState.insuranceType
  );

  // Función para determinar si un seguro es empresarial
  const isBusinessInsurance = () => {
    return businessInsurance.some(insurance => insurance.id === formState.insuranceType);
  };

  // Función para renderizar campos específicos según el tipo de seguro
  const renderSpecificFields = () => {
    switch (formState.insuranceType) {
      case 'salud':
        return (
          <div>
            <label htmlFor="eps" className="block text-gray-700 mb-3 font-semibold">EPS Actual</label>
            <input
              type="text"
              id="eps"
              name="eps"
              value={formState.eps}
              onChange={handleChange}
              className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
              placeholder="Nombre de tu EPS actual"
              required
            />
          </div>
        );

      case 'movilidad':
        return (
          <div className="space-y-6">
            <div className="border-b pb-4">
              <h4 className="text-lg font-semibold text-avance-blue mb-4">Información del Vehículo</h4>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="vehicleBrand" className="block text-gray-700 mb-3 font-semibold">Marca y Referencia*</label>
                <input
                  type="text"
                  id="vehicleBrand"
                  name="vehicleBrand"
                  value={formState.vehicleBrand}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: Toyota Corolla"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="vehiclePlate" className="block text-gray-700 mb-3 font-semibold">Placa*</label>
                <input
                  type="text"
                  id="vehiclePlate"
                  name="vehiclePlate"
                  value={formState.vehiclePlate}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: ABC123"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="vehicleModel" className="block text-gray-700 mb-3 font-semibold">Modelo*</label>
                <input
                  type="number"
                  id="vehicleModel"
                  name="vehicleModel"
                  value={formState.vehicleModel}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: 2023"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="vehicleUse" className="block text-gray-700 mb-3 font-semibold">Uso del Vehículo*</label>
                <select
                  id="vehicleUse"
                  name="vehicleUse"
                  value={formState.vehicleUse}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  required
                >
                  <option value="particular">Particular</option>
                  <option value="publico">Público</option>
                  <option value="empresarial">Empresarial</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="mobilityCity" className="block text-gray-700 mb-3 font-semibold">Ciudad de Movilización*</label>
                <input
                  type="text"
                  id="mobilityCity"
                  name="mobilityCity"
                  value={formState.mobilityCity}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: Medellín"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="vehicleType" className="block text-gray-700 mb-3 font-semibold">Tipo de Vehículo*</label>
                <select
                  id="vehicleType"
                  name="vehicleType"
                  value={formState.vehicleType}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  required
                >
                  <option value="sedan">Sedan</option>
                  <option value="hatchback">Hatchback</option>
                </select>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="cylinderCapacity" className="block text-gray-700 mb-3 font-semibold">Cilindraje*</label>
                <input
                  type="text"
                  id="cylinderCapacity"
                  name="cylinderCapacity"
                  value={formState.cylinderCapacity}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: 1600cc"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="transmission" className="block text-gray-700 mb-3 font-semibold">Transmisión*</label>
                <select
                  id="transmission"
                  name="transmission"
                  value={formState.transmission}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
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
                  className="h-5 w-5 text-avance-blue border-2 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="isZeroKm" className="ml-3 text-gray-700">
                  ¿Es vehículo 0 KM?
                </label>
              </div>

              {formState.isZeroKm && (
                <div>
                  <label htmlFor="invoiceValue" className="block text-gray-700 mb-3 font-semibold">Valor de Factura*</label>
                  <input
                    type="text"
                    id="invoiceValue"
                    name="invoiceValue"
                    value={formState.invoiceValue}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
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
                  className="h-5 w-5 text-avance-blue border-2 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="hasLien" className="ml-3 text-gray-700">
                  ¿Tiene prenda?
                </label>
              </div>

              {formState.hasLien && (
                <div>
                  <label htmlFor="financialEntity" className="block text-gray-700 mb-3 font-semibold">Entidad Financiera*</label>
                  <input
                    type="text"
                    id="financialEntity"
                    name="financialEntity"
                    value={formState.financialEntity}
                    onChange={handleChange}
                    className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
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
              <h4 className="text-lg font-semibold text-avance-blue mb-4">Información del Inmueble</h4>
            </div>
            
            <div>
              <label htmlFor="propertyAddress" className="block text-gray-700 mb-3 font-semibold">Dirección del Inmueble*</label>
              <input
                type="text"
                id="propertyAddress"
                name="propertyAddress"
                value={formState.propertyAddress}
                onChange={handleChange}
                className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                placeholder="Dirección completa del inmueble"
                required
              />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="stratum" className="block text-gray-700 mb-3 font-semibold">Estrato*</label>
                <select
                  id="stratum"
                  name="stratum"
                  value={formState.stratum}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
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
                <label htmlFor="commercialValue" className="block text-gray-700 mb-3 font-semibold">Valor Comercial*</label>
                <input
                  type="text"
                  id="commercialValue"
                  name="commercialValue"
                  value={formState.commercialValue}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: $300.000.000"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <label htmlFor="constructionYears" className="block text-gray-700 mb-3 font-semibold">Años de Construcción*</label>
                <input
                  type="number"
                  id="constructionYears"
                  name="constructionYears"
                  value={formState.constructionYears}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: 15"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="area" className="block text-gray-700 mb-3 font-semibold">Área (m²)*</label>
                <input
                  type="text"
                  id="area"
                  name="area"
                  value={formState.area}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: 120 m²"
                  required
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div>
                <label htmlFor="propertyFloors" className="block text-gray-700 mb-3 font-semibold">Pisos del Inmueble*</label>
                <input
                  type="number"
                  id="propertyFloors"
                  name="propertyFloors"
                  value={formState.propertyFloors}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: 2"
                  required
                />
              </div>
              
              <div>
                <label htmlFor="buildingFloors" className="block text-gray-700 mb-3 font-semibold">Pisos del Edificio</label>
                <input
                  type="number"
                  id="buildingFloors"
                  name="buildingFloors"
                  value={formState.buildingFloors}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                  placeholder="Ej: 10"
                />
              </div>
              
              <div>
                <label htmlFor="basements" className="block text-gray-700 mb-3 font-semibold">Número de Sótanos</label>
                <input
                  type="number"
                  id="basements"
                  name="basements"
                  value={formState.basements}
                  onChange={handleChange}
                  className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
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
                  className="h-5 w-5 text-avance-blue border-2 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="hasSecurity" className="ml-3 text-gray-700">
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
                  className="h-5 w-5 text-avance-blue border-2 border-gray-300 rounded focus:ring-avance-blue"
                />
                <label htmlFor="isGatedCommunity" className="ml-3 text-gray-700">
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
                className="h-5 w-5 text-avance-blue border-2 border-gray-300 rounded focus:ring-avance-blue"
              />
              <label htmlFor="isCreditProtection" className="ml-3 text-gray-700 font-semibold">
                ¿Es para plan crédito protegido?
              </label>
            </div>

            {formState.isCreditProtection && (
              <div className="space-y-6 p-6 bg-gray-50 rounded-xl">
                <h4 className="text-lg font-semibold text-avance-blue">Información del Crédito</h4>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="bankEntity" className="block text-gray-700 mb-3 font-semibold">Entidad Bancaria*</label>
                    <input
                      type="text"
                      id="bankEntity"
                      name="bankEntity"
                      value={formState.bankEntity}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-white"
                      placeholder="Ej: Banco de Bogotá"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="currentCreditValue" className="block text-gray-700 mb-3 font-semibold">Valor Actual del Crédito*</label>
                    <input
                      type="text"
                      id="currentCreditValue"
                      name="currentCreditValue"
                      value={formState.currentCreditValue}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-white"
                      placeholder="Ej: $85.000.000"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="remainingTerm" className="block text-gray-700 mb-3 font-semibold">Plazo Faltante*</label>
                    <input
                      type="text"
                      id="remainingTerm"
                      name="remainingTerm"
                      value={formState.remainingTerm}
                      onChange={handleChange}
                      className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-white"
                      placeholder="Ej: 8 años"
                      required
                    />
                  </div>
                  
                  <div>
                   <label htmlFor="obligationNumber" className="block text-gray-700 mb-3 font-semibold">Número de Obligación*</label>
                   <input
                     type="text"
                     id="obligationNumber"
                     name="obligationNumber"
                     value={formState.obligationNumber}
                     onChange={handleChange}
                     className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-white"
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
               <h4 className="text-lg font-semibold text-avance-blue mb-4">Información de la Empresa</h4>
             </div>
             
             <div>
               <label htmlFor="companyName" className="block text-gray-700 mb-3 font-semibold">Razón Social*</label>
               <input
                 type="text"
                 id="companyName"
                 name="companyName"
                 value={formState.companyName}
                 onChange={handleChange}
                 className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                 placeholder="Nombre completo de la empresa"
                 required
               />
             </div>

             <div>
               <label htmlFor="businessObject" className="block text-gray-700 mb-3 font-semibold">Objeto Social*</label>
               <textarea
                 id="businessObject"
                 name="businessObject"
                 value={formState.businessObject}
                 onChange={handleChange}
                 rows={3}
                 className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white resize-none"
                 placeholder="Descripción del objeto social de la empresa"
                 required
               ></textarea>
             </div>

             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
               <div>
                 <label htmlFor="contactPerson" className="block text-gray-700 mb-3 font-semibold">Persona de Contacto*</label>
                 <input
                   type="text"
                   id="contactPerson"
                   name="contactPerson"
                   value={formState.contactPerson}
                   onChange={handleChange}
                   className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                   placeholder="Nombre de la persona de contacto"
                   required
                 />
               </div>
               
               <div>
                 <label htmlFor="legalRepresentative" className="block text-gray-700 mb-3 font-semibold">Representante Legal*</label>
                 <input
                   type="text"
                   id="legalRepresentative"
                   name="legalRepresentative"
                   value={formState.legalRepresentative}
                   onChange={handleChange}
                   className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
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

 return (
   <section className="py-24 relative overflow-hidden">
     {/* Fondo con solo colores de Avance */}
     <div className="absolute inset-0 bg-gradient-to-br from-avance-blue via-avance-blue-dark to-avance-blue"></div>
     <div className="absolute inset-0 bg-[url('/images/pattern-overlay.png')] opacity-5 mix-blend-soft-light"></div>
     
     {/* Elementos decorativos con colores de marca */}
     <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-avance-gold/20 to-transparent rounded-full blur-3xl transform translate-x-1/3 -translate-y-1/3"></div>
     <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-br from-white/10 to-transparent rounded-full blur-3xl transform -translate-x-1/3 translate-y-1/3"></div>
     <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-avance-gold/10 rounded-full blur-2xl"></div>
     <div className="absolute bottom-1/3 right-1/4 w-24 h-24 bg-white/10 rounded-full blur-xl"></div>
     
     <div className="container-custom relative z-10">
       <motion.div 
         initial={{ y: 30, opacity: 0 }}
         animate={{ y: 0, opacity: 1 }}
         transition={{ duration: 0.8 }}
         className="bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
       >
         <div className="grid grid-cols-1 lg:grid-cols-12">
           {/* Columna izquierda - Formulario */}
           <div className="lg:col-span-7 p-8 lg:p-12">
             <div className="max-w-2xl mx-auto">
               {/* Encabezado */}
               <div className="mb-10">
                 <motion.div 
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ duration: 0.6, delay: 0.2 }}
                   className="flex items-center justify-between mb-6"
                 >
                   <div className="flex items-center">
                     <div className="w-12 h-12 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl flex items-center justify-center mr-4">
                       <Sparkles className="text-white" size={24} />
                     </div>
                     <div>
                       <h2 className="text-3xl md:text-4xl font-bold text-avance-blue">Cotización gratuita</h2>
                       <p className="text-gray-600">En menos de 3 minutos</p>
                     </div>
                   </div>
                   
                   {/* Indicador de pasos */}
                   <div className="hidden sm:flex items-center space-x-2">
                     {Array.from({ length: totalSteps }).map((_, index) => (
                       <div key={index} className="flex items-center">
                         <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold transition-all ${
                           index + 1 <= step 
                             ? 'bg-gradient-to-r from-avance-gold to-avance-gold text-white shadow-lg' 
                             : 'bg-gray-200 text-gray-500'
                         }`}>
                           {index + 1 < step ? <CheckCircle size={16} /> : index + 1}
                         </div>
                         {index < totalSteps - 1 && (
                           <div className={`w-8 h-0.5 mx-1 ${index + 1 < step ? 'bg-avance-gold' : 'bg-gray-200'}`}></div>
                         )}
                       </div>
                     ))}
                   </div>
                 </motion.div>
                 
                 <motion.div
                   initial={{ y: 20, opacity: 0 }}
                   animate={{ y: 0, opacity: 1 }}
                   transition={{ duration: 0.6, delay: 0.3 }}
                 >
                   <p className="text-gray-600 text-lg">
                     {step === 1 ? 
                       'Selecciona el tipo de seguro que necesitas para comenzar tu cotización personalizada.' : 
                       step === 2 ?
                       'Completa tus datos personales para una cotización precisa.' :
                       'Proporciona información específica para tu tipo de seguro seleccionado.'}
                   </p>
                 </motion.div>
               </div>
               
               <form onSubmit={handleSubmit} className="space-y-8">
                 {/* Paso 1: Selección de seguro */}
                 {step === 1 && (
                   <motion.div
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: 20 }}
                     transition={{ duration: 0.4 }}
                     className="space-y-6"
                   >
                     {/* Selector de categoría */}
                     <div className="flex justify-center mb-8">
                       <div className="relative p-1 bg-gray-100 rounded-2xl inline-flex">
                         <button 
                           type="button"
                           onClick={() => setActiveCategory('personal')}
                           className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                             activeCategory === 'personal' 
                               ? 'text-white shadow-lg' 
                               : 'text-gray-600 hover:text-avance-blue'
                           }`}
                         >
                           {activeCategory === 'personal' && (
                             <motion.div
                               layoutId="categoryTab"
                               className="absolute inset-0 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl"
                               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                             />
                           )}
                           <span className="relative z-10">Seguros Personales</span>
                         </button>
                         <button 
                           type="button"
                           onClick={() => setActiveCategory('business')}
                           className={`relative px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                             activeCategory === 'business' 
                               ? 'text-white shadow-lg' 
                               : 'text-gray-600 hover:text-avance-blue'
                           }`}
                         >
                           {activeCategory === 'business' && (
                             <motion.div
                               layoutId="categoryTab"
                               className="absolute inset-0 bg-gradient-to-r from-avance-blue to-avance-blue-dark rounded-xl"
                               transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                             />
                           )}
                           <span className="relative z-10">Seguros Empresariales</span>
                         </button>
                       </div>
                     </div>

                     {/* Grid de seguros */}
                     <div className={`grid gap-4 ${
                       activeCategory === 'personal' 
                         ? 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3' 
                         : 'grid-cols-1 sm:grid-cols-2'
                     }`}>
                       {currentInsuranceTypes.map((type, index) => (
                         <motion.label 
                           key={type.id} 
                           htmlFor={`insurance-${type.id}`}
                           className="cursor-pointer group"
                           initial={{ opacity: 0, y: 20 }}
                           animate={{ opacity: 1, y: 0 }}
                           transition={{ duration: 0.4, delay: index * 0.1 }}
                           whileHover={{ y: -4 }}
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
                           <div className={`relative p-6 border-2 rounded-2xl transition-all duration-300 overflow-hidden ${
                             formState.insuranceType === type.id 
                               ? 'border-avance-blue bg-gradient-to-br from-avance-blue/5 to-avance-blue/10 shadow-lg' 
                               : 'border-gray-200 hover:border-gray-300 hover:shadow-md bg-white'
                           }`}>
                             {/* Fondo sutil para seleccionado */}
                             {formState.insuranceType === type.id && (
                               <div className="absolute inset-0 bg-gradient-to-br from-avance-lightblue/30 to-avance-lightblue/20"></div>
                             )}
                             
                             <div className="relative z-10">
                               <div className="w-14 h-14 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                                 <img 
                                   src={type.iconSrc} 
                                   alt={`${type.name} icon`}
                                   className="w-full h-full object-contain"
                                 />
                               </div>
                               <h3 className={`font-bold text-lg mb-2 ${
                                 formState.insuranceType === type.id ? 'text-avance-blue' : 'text-gray-800'
                               }`}>
                                 {type.name}
                               </h3>
                               <p className={`text-sm ${
                                 formState.insuranceType === type.id ? 'text-avance-blue/80' : 'text-gray-600'
                               }`}>
                                 {type.description}
                               </p>
                               
                               {/* Indicador de selección */}
                               {formState.insuranceType === type.id && (
                                 <motion.div 
                                   initial={{ scale: 0 }}
                                   animate={{ scale: 1 }}
                                   className="absolute top-4 right-4 w-6 h-6 bg-gradient-to-r from-avance-gold to-avance-gold rounded-full flex items-center justify-center"
                                 >
                                   <CheckCircle className="text-white" size={14} />
                                 </motion.div>
                               )}
                             </div>
                           </div>
                         </motion.label>
                       ))}
                     </div>
                   </motion.div>
                 )}
                 
                 {/* Paso 2: Información personal básica */}
                 {step === 2 && (
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4 }}
                     className="space-y-6"
                   >
                     {/* Resumen del seguro seleccionado */}
                     {selectedInsurance && (
                       <motion.div 
                         initial={{ opacity: 0, y: 20 }}
                         animate={{ opacity: 1, y: 0 }}
                         className="p-6 rounded-2xl bg-gradient-to-r from-avance-lightblue/30 to-avance-lightblue/20 border border-avance-blue/20"
                       >
                         <div className="flex items-center">
                           <div className="w-12 h-12 flex items-center justify-center mr-4">
                             <img 
                               src={selectedInsurance.iconSrc} 
                               alt={`${selectedInsurance.name} icon`}
                               className="w-full h-full object-contain"
                             />
                           </div>
                           <div>
                             <h3 className="font-semibold text-avance-blue">Seguro seleccionado: {selectedInsurance.name}</h3>
                             <p className="text-sm text-gray-600">{selectedInsurance.description}</p>
                           </div>
                         </div>
                       </motion.div>
                     )}

                     <div className="border-b pb-4">
                       <h4 className="text-lg font-semibold text-avance-blue mb-4">
                         {isBusinessInsurance() ? 'Datos del Tomador' : 'Datos Personales'}
                       </h4>
                     </div>

                     <div className="grid grid-cols-1 gap-6">
                       <div>
                         <label htmlFor="name" className="block text-gray-700 mb-3 font-semibold">
                           {isBusinessInsurance() ? 'Nombre del Contacto*' : 'Nombre Completo*'}
                         </label>
                         <div className="relative group">
                           <User className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-avance-blue transition-colors" size={20} />
                           <input
                             type="text"
                             id="name"
                             name="name"
                             value={formState.name}
                             onChange={handleChange}
                             className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                             placeholder="Ingresa tu nombre completo"
                             required
                           />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                           <label htmlFor="identification" className="block text-gray-700 mb-3 font-semibold">
                             {isBusinessInsurance() ? 'NIT*' : 'Identificación*'}
                           </label>
                           <div className="relative group">
                             <CreditCard className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-avance-blue transition-colors" size={20} />
                             <input
                               type="text"
                               id="identification"
                               name="identification"
                               value={formState.identification}
                               onChange={handleChange}
                               className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                               placeholder={isBusinessInsurance() ? "Ej: 900123456-1" : "Ej: 1234567890"}
                               required
                             />
                           </div>
                         </div>
                         
                         {!isBusinessInsurance() && (
                           <div>
                             <label htmlFor="birthDate" className="block text-gray-700 mb-3 font-semibold">Fecha de Nacimiento*</label>
                             <div className="relative group">
                               <Calendar className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-avance-blue transition-colors" size={20} />
                               <input
                                 type="date"
                                 id="birthDate"
                                 name="birthDate"
                                 value={formState.birthDate}
                                 onChange={handleChange}
                                 className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                                 required
                               />
                             </div>
                           </div>
                         )}
                       </div>

                       <div>
                         <label htmlFor="address" className="block text-gray-700 mb-3 font-semibold">Dirección*</label>
                         <div className="relative group">
                           <MapPin className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-avance-blue transition-colors" size={20} />
                           <input
                             type="text"
                             id="address"
                             name="address"
                             value={formState.address}
                             onChange={handleChange}
                             className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                             placeholder="Dirección completa"
                             required
                           />
                         </div>
                       </div>

                       <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                         <div>
                           <label htmlFor="phone" className="block text-gray-700 mb-3 font-semibold">Teléfono*</label>
                           <div className="relative group">
                             <Phone className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-avance-blue transition-colors" size={20} />
                             <input
                               type="tel"
                               id="phone"
                               name="phone"
                               value={formState.phone}
                               onChange={handleChange}
                               className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                               placeholder="Ej: 312 282 9850"
                               required
                             />
                           </div>
                         </div>
                         
                         <div>
                           <label htmlFor="email" className="block text-gray-700 mb-3 font-semibold">Correo Electrónico*</label>
                           <div className="relative group">
                             <Mail className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 group-focus-within:text-avance-blue transition-colors" size={20} />
                             <input
                               type="email"
                               id="email"
                               name="email"
                               value={formState.email}
                               onChange={handleChange}
                               className="w-full pl-12 pr-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white"
                               placeholder="correo@ejemplo.com"
                               required
                             />
                           </div>
                         </div>
                       </div>
                     </div>
                   </motion.div>
                 )}

                 {/* Paso 3: Información específica */}
                 {step === 3 && (
                   <motion.div
                     initial={{ opacity: 0, x: 20 }}
                     animate={{ opacity: 1, x: 0 }}
                     exit={{ opacity: 0, x: -20 }}
                     transition={{ duration: 0.4 }}
                     className="space-y-6"
                   >
                     {renderSpecificFields()}

                     <div>
                       <label htmlFor="message" className="block text-gray-700 mb-3 font-semibold">Mensaje adicional (opcional)</label>
                       <textarea
                         id="message"
                         name="message"
                         value={formState.message}
                         onChange={handleChange}
                         rows={4}
                         className="w-full px-4 py-4 border-2 border-gray-200 rounded-xl focus:outline-none focus:ring-4 focus:ring-avance-blue/20 focus:border-avance-blue transition-all bg-gray-50 focus:bg-white resize-none"
                         placeholder="Cuéntanos más sobre lo que necesitas (opcional)..."
                       ></textarea>
                     </div>
                     
                     <div className="flex items-start p-4 bg-gray-50 rounded-xl">
                       <input
                         type="checkbox"
                         id="agreed"
                         name="agreed"
                         checked={formState.agreed}
                         onChange={handleChange}
                         className="mt-1 h-5 w-5 text-avance-blue border-2 border-gray-300 rounded focus:ring-avance-blue"
                         required
                       />
                       <label htmlFor="agreed" className="ml-3 text-sm text-gray-700 leading-relaxed">
                         Acepto la <a href="/politica-privacidad" className="text-avance-blue hover:underline font-semibold">Política de Privacidad</a> y autorizo el tratamiento de mis datos personales para recibir información sobre seguros
                       </label>
                     </div>
                   </motion.div>
                 )}

                 {/* Botones de navegación */}
                 <div className="flex items-center justify-between mt-10 pt-6 border-t border-gray-100">
                   {step > 1 && (
                     <button 
                       type="button" 
                       onClick={prevStep}
                       className="px-6 py-3 border-2 border-gray-300 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-400 transition-all flex items-center font-semibold"
                     >
                       <ArrowRight className="mr-2 rotate-180" size={18} />
                       Anterior
                     </button>
                   )}
                   
                   <button 
                     type="submit" 
                     className={`relative overflow-hidden group bg-gradient-to-r from-avance-gold to-avance-gold text-white rounded-xl px-8 py-4 font-bold transition-all flex items-center justify-center shadow-lg hover:shadow-xl transform hover:scale-105 ${step === 1 ? 'ml-auto' : 'flex-1 ml-4'}`}
                     disabled={isSubmitting}
                   >
                     <span className="relative z-10 flex items-center">
                       {isSubmitting ? (
                         <>
                           <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin mr-2"></div>
                           Enviando...
                         </>
                       ) : (
                         <>
                           {step < totalSteps ? 'Continuar' : 'Solicitar cotización gratuita'}
                           {!isSubmitting && <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={18} />}
                         </>
                       )}
                     </span>
                     <div className="absolute inset-0 w-full h-full bg-white/20 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-300"></div>
                   </button>
                 </div>
                 
                 {/* Indicadores de seguridad */}
                 <div className="flex items-center justify-center space-x-4 mt-8 p-4 bg-gray-50 rounded-xl">
                   <div className="flex items-center space-x-2 text-sm text-gray-600">
                     <Lock className="text-avance-blue" size={16} />
                     <span>Conexión segura SSL</span>
                   </div>
                   <div className="w-1 h-4 bg-gray-300 rounded-full"></div>
                   <div className="flex items-center space-x-2 text-sm text-gray-600">
                     <img 
                       src="https://storage.googleapis.com/cluvi/Avance-Seguros/Iconos/ARL.png" 
                       alt="Datos protegidos"
                       className="w-4 h-4 object-contain"
                     />
                     <span>Datos protegidos</span>
                   </div>
                 </div>
               </form>
             </div>
           </div>
           
           {/* Columna derecha - Beneficios */}
           <div className="lg:col-span-5 bg-gradient-to-br from-avance-blue via-avance-blue-dark to-avance-blue text-white p-8 lg:p-12 relative overflow-hidden">
             {/* Elementos decorativos con colores de marca */}
             <div className="absolute top-0 right-0 w-64 h-64 bg-white opacity-5 rounded-full transform translate-x-1/2 -translate-y-1/2"></div>
             <div className="absolute bottom-0 left-0 w-96 h-96 bg-avance-gold opacity-10 rounded-full transform -translate-x-1/2 translate-y-1/2"></div>
             <div className="absolute top-1/3 right-1/4 w-32 h-32 bg-white/5 rounded-full blur-2xl"></div>
             
             <div className="relative z-10 h-full flex flex-col">
               <motion.div
                 initial={{ opacity: 0, y: 20 }}
                 animate={{ opacity: 1, y: 0 }}
                 transition={{ duration: 0.6, delay: 0.4 }}
               >
                 <div className="flex items-center mb-6">
                   <Star className="text-avance-gold mr-3" size={32} />
                   <div>
                     <h3 className="text-3xl font-bold">¿Por qué elegir Avance Seguros?</h3>
                     <p className="text-white/80">Más de 17 años protegiendo familias colombianas</p>
                   </div>
                 </div>
                 
                 <p className="text-white/90 text-lg mb-10 leading-relaxed">
                   Te ofrecemos la mejor asesoría para que encuentres el seguro que realmente necesitas, 
                   al mejor precio posible y con el respaldo de las aseguradoras más confiables del país.
                 </p>
               </motion.div>
               
               <div className="space-y-6 flex-1">
                 {[
                   {
                     icon: CheckCircle,
                     title: "Cotizaciones 100% personalizadas",
                     description: "Analizamos tu situación específica para encontrar exactamente lo que necesitas, sin productos genéricos."
                   },
                   {
                     icon: Star,
                     title: "Comparamos todas las opciones",
                     description: "No te limitamos a una sola aseguradora. Encontramos la mejor opción entre más de 15 aseguradoras aliadas."
                   },
                   {
                     icon: CalendarClock,
                     title: "Respuesta garantizada en 24h",
                     description: "Te contactaremos en menos de 24 horas con opciones reales adaptadas a tu presupuesto y necesidades."
                   }
                 ].map((benefit, index) => (
                   <motion.div 
                     key={index}
                     className="flex items-start group"
                     initial={{ opacity: 0, x: -20 }}
                     animate={{ opacity: 1, x: 0 }}
                     transition={{ duration: 0.6, delay: 0.5 + (index * 0.1) }}
                   >
                     <div className="bg-white/10 p-3 rounded-xl mr-4 group-hover:bg-white/20 transition-colors">
                       <benefit.icon className="text-avance-gold" size={24} />
                     </div>
                     <div>
                       <h4 className="font-bold text-lg mb-2 group-hover:text-avance-gold transition-colors">{benefit.title}</h4>
                       <p className="text-white/80 leading-relaxed">{benefit.description}</p>
                     </div>
                   </motion.div>
                 ))}
               </div>
             </div>
           </div>
         </div>
       </motion.div>
     </div>
   </section>
 );
};

export default QuoteForm;