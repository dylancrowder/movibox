# Configuración de Google Ads y Seguimiento de Conversiones

## ✅ Qué se ha configurado

### 1. **Google Ads Tag (gtag.js)**
- **Account ID:** `AW-17013125582`
- **Ubicación:** `app/layout.tsx` - En el `<head>` después del elemento `<body>`
- **Estrategia:** Se carga con `strategy="afterInteractive"` para no afectar el rendimiento

### 2. **Consentimiento para EEA (GDPR Compliant)**
Configurado con valores por defecto `denied` para cumplir con GDPR:
```javascript
gtag('consent', 'default', {
  'analytics_storage': 'denied',
  'ad_storage': 'denied',
  'ad_user_data': 'denied',
  'ad_personalization': 'denied'
});
```

### 3. **Banner de Consentimiento**
- **Archivo:** `components/consent-banner.tsx`
- **Comportamiento:** Aparece solo a usuarios nuevos (verifica `localStorage`)
- **Opciones:**
  - ✅ **Aceptar:** Actualiza consentimiento a `granted` y habilita tracking completo
  - ❌ **Rechazar:** Mantiene consentimiento en `denied`, sin tracking

### 4. **Seguimiento de Conversiones (WhatsApp)**
- **Archivo:** `components/whatsapp-button.tsx`
- **Evento:** Se dispara cuando el usuario hace clic en el botón de WhatsApp
- **Datos enviados:**
  - Evento: `conversion`
  - Valor: `1.0 ARS` (moneda Argentina)

---

## 🔧 Próximos pasos en Google Ads Console

### Paso 1: Verificar que el tag está instalado
1. Ve a **Google Ads** → **Tools & Settings** → **Conversions**
2. Selecciona tu cuenta (AW-17013125582)
3. Busca "Status" - debería mostrar "Tag instalada correctamente"

### Paso 2: Crear una acción de conversión (si no existe)
1. En **Conversions**, haz clic en **"New Conversion"**
2. Selecciona **"Website"**
3. Nombre: `"WhatsApp Contact"` (o similar)
4. Valor de conversión: `1 ARS` (opcional)
5. Modelo de atribución: Depende de tu estrategia
6. Guarda y copia el ID de conversión si lo necesitas

### Paso 3: Validar el tracking
1. Abre tu sitio en navegación de incógnito
2. Acepta el consentimiento
3. Haz clic en el botón de WhatsApp
4. En Google Ads → **Conversions**, deberías ver el evento registrado en ~24 horas

---

## 📊 Datos que se están rastreando

Cuando un usuario **acepta el consentimiento** y **hace clic en WhatsApp**:

| Dato | Valor |
|------|-------|
| **Event** | `conversion` |
| **Account** | `AW-17013125582` |
| **Value** | `1.0` |
| **Currency** | `ARS` |
| **Source** | `whatsapp_contact_button` |

---

## 🛡️ Cumplimiento GDPR/CCPA

✅ **Consentimiento por defecto:** Deshabilitado (`denied`)  
✅ **Banner de consentimiento:** Aparece antes de cualquier tracking  
✅ **LocalStorage:** Respeta la decisión del usuario  
✅ **Actualización dinámica:** Solo trackea si el usuario acepta  

---

## 🔑 Configuración de Variables de Entorno (Opcional)

Si quieres usar variables de entorno:

```env
# .env.local
NEXT_PUBLIC_GOOGLE_ADS_ID=AW-17013125582
NEXT_PUBLIC_GA_ID=G-E7K55VT53P
```

---

## 📝 Archivos modificados

1. ✅ `app/layout.tsx` - Agregado Google Ads tag y consentimiento
2. ✅ `components/whatsapp-button.tsx` - Actualizado evento de conversión
3. ✅ `components/consent-banner.tsx` - Nuevo componente de consentimiento

---

## 🚀 Pruebas locales

```bash
npm run dev
```

1. Abre `http://localhost:3000`
2. Abre DevTools → **Network** → Busca solicitudes a `googletagmanager.com`
3. Deberías ver peticiones de gtag.js cargándose
4. Acepta consentimiento → Haz clic en WhatsApp
5. Verifica en DevTools → **Console** que no hay errores

---

## ⚠️ Notas importantes

- **Conversion ID:** Por ahora usamos el Account ID. Si necesitas un Conversion ID específico, actualiza en `whatsapp-button.tsx`
- **Tiempo de propagación:** Los datos pueden tardar 24-48 horas en aparecer en Google Ads
- **Testing:** Usa modo incógnito para no contaminar tus datos analíticos personales
- **Reporte de privacidad:** El consentimiento se almacena localmente (`localStorage`)

---

## 📞 Soporte

Para más información:
- [Google Ads Tag Setup Docs](https://support.google.com/google-ads/answer/12324645)
- [Google Consent Mode](https://support.google.com/google-ads/answer/10000141)
- [GDPR Compliance](https://support.google.com/google-ads/answer/7381744)
