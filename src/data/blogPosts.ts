export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  date: string;
  author: string;
  readTime: string;
  category: string;
  image: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: "por-que-es-importante-seguro-automovil",
    title: "¿Por qué es importante tener un seguro para tu automóvil?",
    excerpt: "Descubre las razones por las cuales contar con un seguro de automóvil es fundamental para proteger tu patrimonio y garantizar tu tranquilidad en la vía.",
    date: "15 mayo, 2025",
    author: "Juan Pérez",
    readTime: "5 min",
    category: "Seguros Personales",
    image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Blog_Images/blog11.png",
    content: `
## La importancia de proteger tu vehículo

Tu automóvil es una de las inversiones más importantes que realizarás en tu vida. Ya sea que lo uses para ir al trabajo, para viajes familiares o para tu negocio, protegerlo adecuadamente es fundamental.

### Razones principales para asegurar tu vehículo

**1. Protección financiera ante imprevistos**

Un accidente de tránsito puede generar costos significativos, desde reparaciones menores hasta pérdidas totales. El seguro te protege de gastos inesperados que podrían afectar gravemente tu economía familiar.

**2. Responsabilidad civil obligatoria**

En Colombia, el SOAT es obligatorio, pero muchas veces no es suficiente. Un seguro todo riesgo te brinda una cobertura mucho más amplia, protegiendo no solo tu vehículo sino también a terceros involucrados en un accidente.

**3. Tranquilidad en la vía**

Saber que cuentas con un respaldo ante cualquier eventualidad te permite conducir con mayor tranquilidad. Esto incluye coberturas como asistencia en carretera, vehículo de reemplazo y atención 24/7.

### Tipos de cobertura disponibles

- **Responsabilidad Civil**: Cubre daños a terceros
- **Pérdida Total**: Protección ante robo o daño irreparable
- **Pérdida Parcial**: Reparación de daños menores
- **Asistencia**: Grúa, mecánico y servicios de emergencia

### ¿Cómo elegir el seguro adecuado?

Considera factores como el valor comercial de tu vehículo, tu presupuesto, el uso que le das al carro y las coberturas adicionales que necesites. En Avance Seguros te asesoramos para encontrar la mejor opción según tus necesidades.

### Conclusión

Un seguro de automóvil no es un gasto, es una inversión en tu tranquilidad y seguridad financiera. No esperes a que sea demasiado tarde para proteger tu patrimonio.
    `
  },
  {
    id: 2,
    slug: "claves-elegir-seguro-salud-familia",
    title: "5 claves para elegir el seguro de salud perfecto para tu familia",
    excerpt: "Te compartimos los aspectos más importantes que debes considerar a la hora de seleccionar un seguro de salud que se adapte a las necesidades específicas de tu familia.",
    date: "3 mayo, 2025",
    author: "Ana Gómez",
    readTime: "7 min",
    category: "Seguros Personales",
    image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Blog_Images/blog12.png",
    content: `
## Protege la salud de quienes más amas

Elegir un seguro de salud para tu familia es una de las decisiones más importantes que tomarás. Aquí te compartimos las claves para hacer la mejor elección.

### 1. Evalúa las necesidades médicas de tu familia

Antes de contratar cualquier póliza, considera:

- **Edades de los miembros**: Los niños y adultos mayores requieren coberturas específicas
- **Condiciones preexistentes**: Verifica que estén cubiertas
- **Medicamentos recurrentes**: Asegúrate de que estén incluidos en el plan

### 2. Cobertura de red hospitalaria

Es fundamental verificar que el seguro tenga convenios con clínicas y hospitales de calidad cerca de tu residencia o trabajo. Pregunta sobre:

- Hospitales en convenio
- Especialistas disponibles
- Servicios de urgencias
- Cobertura nacional e internacional

### 3. Servicios preventivos incluidos

Un buen seguro de salud debe enfocarse en la prevención:

- Chequeos médicos anuales
- Vacunación
- Programas de maternidad
- Exámenes de laboratorio periódicos

### 4. Costos y deducibles

Analiza detenidamente la estructura de costos:

- **Prima mensual**: Debe ajustarse a tu presupuesto familiar
- **Deducibles**: Monto que pagas antes de que el seguro cubra
- **Copagos**: Porcentaje que asumes en cada consulta
- **Tope máximo anual**: Límite de gastos de tu bolsillo

### 5. Servicios adicionales

Los mejores seguros ofrecen beneficios extra como:

- Telemedicina 24/7
- Asistencia odontológica
- Programas de bienestar
- Descuentos en farmacias
- Red de laboratorios clínicos

### Errores comunes a evitar

❌ Elegir solo por el precio más bajo
❌ No leer las exclusiones de la póliza
❌ Ignorar los períodos de carencia
❌ No actualizar la póliza según cambios familiares

### Conclusión

Invertir en un seguro de salud familiar es invertir en tranquilidad. En Avance Seguros te ayudamos a comparar opciones y encontrar el plan perfecto para tu familia.
    `
  },
  {
    id: 3,
    slug: "seguros-pymes-proteccion-negocios",
    title: "Seguros para PYMES: Protege tu negocio ante imprevistos",
    excerpt: "Las pequeñas y medianas empresas enfrentan diversos riesgos que pueden impactar negativamente su operación. Conoce cómo un seguro integral puede ayudarte a mitigarlos.",
    date: "28 abril, 2025",
    author: "Carlos Martínez",
    readTime: "6 min",
    category: "Seguros Empresariales",
    image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Blog_Images/blog13.png",
    content: `
## Tu negocio merece estar protegido

Las PYMES son el motor de la economía colombiana, pero también enfrentan riesgos significativos que pueden amenazar su continuidad. Un seguro empresarial adecuado es clave para la estabilidad de tu negocio.

### Riesgos comunes que enfrentan las PYMES

**Riesgos operacionales:**
- Incendios en instalaciones
- Daños por agua o inundaciones
- Robo de equipos y mercancía
- Fallas eléctricas

**Riesgos de responsabilidad:**
- Accidentes de clientes en tus instalaciones
- Errores profesionales
- Daños a terceros por tus productos o servicios
- Reclamaciones laborales

**Riesgos tecnológicos:**
- Ciberataques y robo de información
- Pérdida de datos críticos
- Fraude electrónico

### Tipos de seguros esenciales para PYMES

#### 1. Seguro de Responsabilidad Civil

Protege tu empresa ante reclamaciones de terceros por:
- Daños corporales
- Daños materiales
- Perjuicios económicos

#### 2. Seguro de Incendio y Daños Materiales

Cubre:
- Edificaciones
- Maquinaria y equipo
- Inventarios
- Mobiliario

#### 3. Seguro de Equipo y Maquinaria

Especialmente importante para negocios manufactureros o de servicios que dependen de equipos especializados.

#### 4. Seguro de Transporte de Mercancías

Si tu negocio involucra distribución o logística, este seguro es indispensable para proteger tus productos durante el traslado.

#### 5. Seguro de Ciberseguridad

En la era digital, proteger tus datos y los de tus clientes es fundamental.

### Beneficios de asegurar tu PYME

✅ **Continuidad del negocio**: Recuperación rápida ante siniestros
✅ **Protección patrimonial**: Evita que tu patrimonio personal se vea afectado
✅ **Cumplimiento legal**: Muchos contratos requieren seguros específicos
✅ **Credibilidad comercial**: Genera confianza en clientes y proveedores
✅ **Tranquilidad financiera**: Evita gastos inesperados que afecten el flujo de caja

### ¿Cuánto cuesta asegurar una PYME?

El costo depende de varios factores:
- Tipo de actividad comercial
- Tamaño de la empresa
- Ubicación
- Coberturas seleccionadas
- Historial de siniestralidad

En Avance Seguros diseñamos paquetes personalizados que se ajustan a tu presupuesto sin sacrificar la protección que necesitas.

### Conclusión

No dejes que un imprevisto ponga en riesgo años de esfuerzo. Proteger tu PYME es proteger tu futuro y el de tu equipo de trabajo.
    `
  },
  {
    id: 4,
    slug: "que-hacer-siniestro-vehiculo",
    title: "¿Qué hacer en caso de un siniestro con tu vehículo?",
    excerpt: "Guía paso a paso sobre cómo actuar correctamente ante un accidente automovilístico para garantizar una gestión eficiente de tu reclamación.",
    date: "20 abril, 2025",
    author: "María López",
    readTime: "8 min",
    category: "Seguros Personales",
    image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Blog_Images/blog14.png",
    content: `
## Mantén la calma y sigue estos pasos

Un accidente de tránsito es una experiencia estresante, pero saber cómo actuar correctamente puede hacer una gran diferencia en el proceso de reclamación y recuperación.

### Pasos inmediatos en el lugar del accidente

#### 1. Verifica tu estado y el de los demás (Primeros 30 segundos)

- Evalúa si hay heridos
- Si es posible, mueve los vehículos a un lugar seguro
- Enciende las luces de emergencia
- Coloca el triángulo de seguridad

#### 2. Llama a las autoridades (Primeros 5 minutos)

**Contactos importantes:**
- Policía de Tránsito: 123
- Línea de emergencias: 911
- Tu aseguradora (número en la póliza)

#### 3. Documenta el incidente (Primeros 15 minutos)

📱 **Toma fotografías de:**
- Daños en todos los vehículos involucrados
- Posición de los vehículos
- Señalización del lugar
- Placas de los vehículos
- Documentos de los conductores

📝 **Registra información:**
- Nombre y contacto de los conductores
- Datos de seguros
- Testigos presenciales
- Condiciones climáticas y de la vía

#### 4. NO admitas culpabilidad

Evita hacer declaraciones como "fue mi culpa" o "perdón". Limítate a intercambiar información y colaborar con las autoridades.

### Proceso de reclamación al seguro

#### Paso 1: Notificación inmediata (Primeras 24 horas)

Contacta a tu aseguradora lo antes posible:
- Reporta el siniestro por teléfono
- Proporciona los detalles básicos
- Solicita el número de caso

#### Paso 2: Documentación requerida (2-3 días)

Reúne y envía:
- Croquis del accidente
- Informe policial
- SOAT de todos los vehículos
- Licencia de conducción
- Tarjeta de propiedad
- Fotografías del incidente
- Declaración de testigos (si aplica)

#### Paso 3: Inspección del vehículo (3-5 días)

- La aseguradora programará una cita
- Un perito evaluará los daños
- Se determinará si amerita reparación o pérdida total

#### Paso 4: Autorización de reparación (5-7 días)

Una vez aprobada la reclamación:
- Recibirás autorización para reparar
- Podrás elegir el taller (según tu póliza)
- En algunos casos, tendrás vehículo de reemplazo

### Errores comunes que debes evitar

❌ No reportar el siniestro a tiempo
❌ Reparar el vehículo antes de la inspección
❌ No tomar evidencia fotográfica
❌ Hacer arreglos directos sin notificar al seguro
❌ Proporcionar información falsa

### Tiempos de respuesta esperados

- **Asignación de caso**: 24 horas
- **Inspección**: 3-5 días hábiles
- **Aprobación**: 5-10 días hábiles
- **Reparación**: Según magnitud del daño

### Derechos que tienes como asegurado

✅ Recibir información clara sobre el proceso
✅ Conocer el estado de tu reclamación
✅ Obtener un vehículo de reemplazo (si está en tu póliza)
✅ Elegir el taller (en algunas pólizas)
✅ Presentar quejas ante la aseguradora o la Superfinanciera

### Consejos adicionales

💡 Mantén siempre en el vehículo:
- Copia de la póliza
- Números de emergencia
- Kit de carretera completo
- Cámara o celular con carga

💡 Considera instalar:
- Cámara de tablero (dashcam)
- GPS con tracking
- Sistemas de seguridad adicionales

### Conclusión

Estar preparado y saber cómo actuar correctamente ante un siniestro hará que el proceso sea más ágil y menos estresante. En Avance Seguros te acompañamos en cada paso del proceso de reclamación.
    `
  },
  {
    id: 5,
    slug: "seguros-transporte-proteccion-mercancias",
    title: "Seguros de transporte: Factores clave para la protección de mercancías",
    excerpt: "El transporte de mercancías implica riesgos significativos. Conoce cómo un seguro especializado puede proteger tu carga durante todo el trayecto.",
    date: "12 abril, 2025",
    author: "Andrés Ramírez",
    readTime: "5 min",
    category: "Seguros Empresariales",
    image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Blog_Images/blog15.png",
    content: `
## Protege tu carga en cada kilómetro

El transporte de mercancías es fundamental para la economía, pero también implica riesgos importantes que pueden generar pérdidas significativas. Un seguro adecuado es tu mejor aliado.

### Riesgos en el transporte de mercancías

**Riesgos durante el tránsito:**
- Accidentes de tráfico
- Volcaduras
- Incendios
- Colisiones

**Riesgos de seguridad:**
- Robo de mercancía
- Hurto en ruta
- Asaltos a transportistas
- Piratería terrestre

**Riesgos naturales:**
- Inundaciones
- Deslizamientos
- Tormentas
- Terremotos

**Riesgos operacionales:**
- Daños por manipulación
- Contaminación
- Derrame de líquidos
- Roturas

### Tipos de seguros de transporte

#### 1. Seguro de Transporte Terrestre

Cubre mercancías que se movilizan por carretera:
- Carga general
- Mercancías peligrosas
- Productos perecederos
- Carga de alto valor

#### 2. Seguro de Transporte Marítimo

Para importaciones y exportaciones vía marítima:
- Cobertura internacional
- Protección en puertos
- Transbordo
- Almacenamiento temporal

#### 3. Seguro de Transporte Aéreo

Ideal para mercancías urgentes o de alto valor:
- Tiempos de tránsito cortos
- Menor riesgo de deterioro
- Cobertura global

#### 4. Seguro Multimodal

Combina diferentes medios de transporte en un solo seguro:
- Cobertura integral
- Sin necesidad de múltiples pólizas
- Trámites simplificados

### Factores que determinan el costo del seguro

1. **Tipo de mercancía**: Productos frágiles o valiosos tienen mayor costo
2. **Valor declarado**: Mayor valor = mayor prima
3. **Distancia del trayecto**: Rutas más largas implican mayor riesgo
4. **Medio de transporte**: Cada medio tiene diferentes niveles de riesgo
5. **Embalaje**: Un empaque adecuado reduce la prima
6. **Historial de siniestros**: Empresas con buen historial pagan menos

### Coberturas esenciales

✅ **Todo Riesgo**: Protección más completa
✅ **Pérdida Total**: Cubre destrucción completa de la carga
✅ **Daños Parciales**: Deterioro o pérdida parcial
✅ **Gastos de Salvamento**: Costos de rescate de mercancía
✅ **Responsabilidad Civil**: Daños a terceros

### Mejores prácticas para reducir riesgos

📦 **Empaque adecuado:**
- Utiliza materiales de calidad
- Protección contra humedad
- Etiquetado claro
- Paletizado seguro

🚛 **Selección de transportista:**
- Verifica certificaciones
- Revisa historial de seguridad
- Confirma seguro del transportista
- Establece protocolos de comunicación

📋 **Documentación completa:**
- Factura comercial
- Manifiesto de carga
- Packing list
- Certificados de calidad

🔒 **Medidas de seguridad:**
- GPS en vehículos
- Sellos de seguridad
- Escoltas (para cargas valiosas)
- Rutas seguras planificadas

### Proceso de reclamación

1. **Notificación inmediata** a la aseguradora
2. **Documentación del daño** con fotografías
3. **Informe de autoridades** (si aplica)
4. **Evaluación por perito**
5. **Pago de indemnización**

### Conclusión

No importa si transportas productos locales o internacionales, un seguro de transporte bien estructurado protege tu inversión y garantiza la continuidad de tu operación comercial.

En Avance Seguros te ofrecemos soluciones especializadas según el tipo de carga y rutas que manejes.
    `
  },
  {
    id: 6,
    slug: "como-elegir-cobertura-hogar",
    title: "Cómo elegir la cobertura ideal para tu hogar",
    excerpt: "Proteger tu vivienda es fundamental. Te explicamos los diferentes tipos de cobertura disponibles para que elijas la que mejor se adapte a tus necesidades.",
    date: "5 abril, 2025",
    author: "Laura Sánchez",
    readTime: "6 min",
    category: "Seguros Personales",
    image: "https://storage.googleapis.com/cluvi/Avance-Seguros/Blog_Images/blog16.png",
    content: `
## Tu hogar es tu patrimonio más valioso

Tu casa es más que cuatro paredes: es el lugar donde construyes recuerdos, proteges a tu familia y guardas tus bienes más preciados. Asegurarla correctamente es una decisión inteligente.

### ¿Por qué necesitas un seguro de hogar?

**Protección financiera:**
- Un incendio o inundación puede generar pérdidas millonarias
- Las reparaciones estructurales son costosas
- Reemplazar tus pertenencias puede afectar tu economía

**Responsabilidad civil:**
- Daños a vecinos por filtración de agua
- Accidentes de visitantes en tu propiedad
- Daños causados por tus mascotas

**Tranquilidad:**
- Dormir sabiendo que estás protegido
- Respaldo ante imprevistos
- Asistencia profesional cuando la necesites

### Elementos que puedes asegurar

#### 1. Estructura de la vivienda

- Muros y cimientos
- Techo y techos
- Pisos
- Instalaciones eléctricas
- Instalaciones sanitarias
- Ventanas y puertas

#### 2. Contenidos

- Muebles y electrodomésticos
- Aparatos electrónicos
- Ropa y efectos personales
- Obras de arte y artículos de valor
- Joyas (con límites específicos)

#### 3. Mejoras y remodelaciones

- Cocinas integrales
- Closets empotrados
- Pisos de alto valor
- Acabados especiales

### Coberturas principales

**Coberturas básicas:**

🔥 **Incendio y rayo**
- Daños por fuego directo
- Daños por humo
- Gastos de extinción

💧 **Daños por agua**
- Ruptura de tuberías
- Desbordamiento de tanques
- Filtraciones desde apartamentos superiores

⚡ **Daños eléctricos**
- Cortocircuitos
- Sobretensión
- Caída de rayos

🌪️ **Eventos naturales**
- Terremotos
- Inundaciones
- Vendavales
- Deslizamientos

**Coberturas adicionales recomendadas:**

🏠 **Todo Riesgo Contenidos**
- Robo con violencia
- Hurto
- Daños accidentales

👨‍👩‍👧 **Responsabilidad Civil**
- Daños a terceros
- Accidentes de visitantes
- Daños a propiedades vecinas

🔧 **Asistencia en el hogar**
- Cerrajería
- Plomería
- Electricidad
- Vidriería
- Servicios 24/7

### Factores que afectan el costo

1. **Ubicación del inmueble**
   - Zonas de bajo riesgo = menor prima
   - Áreas propensas a inundaciones = mayor costo

2. **Valor del inmueble**
   - Mayor valor = mayor prima
   - Importante: asegurar por valor real

3. **Tipo de construcción**
   - Materiales sismorresistentes = descuentos
   - Construcciones antiguas = mayor riesgo

4. **Medidas de seguridad**
   - Alarmas monitoreadas
   - Cámaras de seguridad
   - Vigilancia privada
   - Puertas blindadas

5. **Historial de reclamaciones**
   - Sin siniestros previos = mejor tarifa

### Errores comunes al asegurar tu hogar

❌ **Subasegurar**: Declarar un valor menor al real
❌ **Sobrasegurar**: Pagar por más de lo que tienes
❌ **No actualizar el valor**: Los bienes se revalorizan
❌ **Ignorar las exclusiones**: Leer bien la póliza
❌ **No documentar tus bienes**: Dificulta reclamaciones

### Consejos para ahorrar en tu seguro

💰 **1. Instala sistemas de seguridad**
- Alarmas certificadas
- Cámaras monitoreadas
- Detectores de humo

💰 **2. Agrupa tus seguros**
- Contrata hogar y auto con la misma compañía
- Obtén descuentos por paquetes

💰 **3. Aumenta el deducible**
- Mayor deducible = menor prima mensual
- Solo si puedes asumirlo en caso de siniestro

💰 **4. Mantén buen historial**
- Evita reclamaciones pequeñas
- Mantén tu propiedad en buen estado

### Documentación útil a conservar

📸 Fotografías de:
- Cada habitación de la casa
- Bienes de valor
- Facturas de artículos costosos
- Certificados de autenticidad

📄 Documentos importantes:
- Escrituras de la propiedad
- Avalúo actualizado
- Licencias de construcción
- Facturas de mejoras

### ¿Cuándo revisar tu póliza?

🔄 **Anualmente**: Verifica que las sumas aseguradas sean adecuadas
🔄 **Tras remodelaciones**: Actualiza el valor
🔄 **Al adquirir bienes valiosos**: Amplía la cobertura
🔄 **Cambios en el entorno**: Nueva construcción cercana, cambios de zona

### Conclusión

Un seguro de hogar bien estructurado te da la tranquilidad de saber que tu patrimonio está protegido. No es solo una obligación con el banco si tienes hipoteca, es una inversión en tu seguridad y la de tu familia.

En Avance Seguros evaluamos tu vivienda y te recomendamos la cobertura perfecta según tus necesidades y presupuesto.
    `
  }
];

export const getBlogPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(post => post.slug === slug);
};

export const getBlogPostById = (id: number): BlogPost | undefined => {
  return blogPosts.find(post => post.id === id);
};

export const getRecentPosts = (limit: number = 3): BlogPost[] => {
  return blogPosts.slice(0, limit);
};
