# 📋 PRÓXIMOS PASOS - SEO Movibox

## ✅ YA COMPLETADO (En esta sesión)

- [x] Corregir URLs Open Graph a absolutas (Blog, FAQ)
- [x] Agregar Open Graph tags a página Contacto
- [x] Mejorar meta descriptions (Blog, FAQ, Contacto)
- [x] Crear archivo robots.txt
- [x] Realizar auditoría SEO completa

---

## 🔄 PRÓXIMAS ACCIONES (Próximas 2 semanas)

### 1. **Agregar Breadcrumb Schema JSON-LD en Blog Posts** (30 min)

**Archivos a modificar:**
- `app/blog/como-empacar-para-una-mudanza/page.tsx`
- `app/blog/como-organizar-una-mudanza-sin-estres/page.tsx`
- `app/blog/cuando-usar-guardamuebles/page.tsx`
- `app/blog/deposito-guardamuebles/page.tsx`
- `app/blog/errores-comunes-al-contratar-una-mudanza/page.tsx`
- `app/blog/mejor-momento-para-mudarse/page.tsx`
- `app/blog/mudanzas-y-fletes/page.tsx`
- `app/blog/transporte-nacional/page.tsx`

**Qué agregar (en cada post):**

```tsx
const breadcrumbSchema = {
  "@type": "BreadcrumbList",
  "itemListElement": [
    {
      "@type": "ListItem",
      "position": 1,
      "name": "Inicio",
      "item": "https://www.movibox.com.ar"
    },
    {
      "@type": "ListItem",
      "position": 2,
      "name": "Blog",
      "item": "https://www.movibox.com.ar/blog"
    },
    {
      "@type": "ListItem",
      "position": 3,
      "name": "[TÍTULO DEL POST]",
      "item": "https://www.movibox.com.ar/blog/[SLUG]"
    }
  ]
};
```

Agregar en el `<script type="application/ld+json">` existente en la sección `@graph`.

---

### 2. **Mejorar Enlaces Internos en Blog Posts** (45 min)

**Qué hacer:**
- En cada post del blog, agregar mínimo 2 enlaces internos a páginas de servicios
- Usar anchor text relevante (no "haz clic aquí")
- Estrategia: Si hablas de mudanzas → enlazar a `/mudanzas`
- Si hablas de guardamuebles → enlazar a `/guardamuebles`

**Ejemplo de anchor text:**
❌ "Haz clic aquí"
✅ "Servicio completo de mudanzas en Córdoba"
✅ "Guardamuebles con vigilancia 24/7 en Córdoba"

---

### 3. **Agregar Enlaces Internos en Página FAQ** (20 min)

**En respuestas relevantes, agregar links:**

Ejemplo en FAQ de guardamuebles:
```
"Nuestro servicio de guardamuebles está diseñado para ser fácil y seguro. 
[Conoce más sobre guardamuebles](/guardamuebles) en Córdoba con vigilancia 24/7."
```

Ejemplo en FAQ de mudanzas:
```
"Realizamos mudanzas profesionales en Córdoba Capital y provincia. 
[Ver detalles del servicio de mudanzas](/mudanzas) con equipo especializado."
```

---

### 4. **Validar Sitemap XML** (15 min)

**Pasos:**
1. Hacer build: `npm run build`
2. Verificar que existe `.next/server/sitemap.xml`
3. Acceder a: `https://www.movibox.com.ar/sitemap.xml`
4. Confirmar que incluye todas las páginas principales
5. Si funciona, agregar a Google Search Console

---

### 5. **Submeter a Google Search Console** (10 min)

**Qué hacer:**
1. Ir a https://search.google.com/search-console
2. Agregar propiedad: `https://www.movibox.com.ar`
3. Verificar dominio (opción recomendada: DNS TXT)
4. Submeter sitemap: `https://www.movibox.com.ar/sitemap.xml`
5. Esperar indexación (24-48 horas)

---

### 6. **Expandir Palabras Clave en Contenido** (1 hora)

**Por página:**

**Mudanzas (`/mudanzas`):**
- Agregar naturalmente: "servicio de mudanza", "mudanza sin estrés", "presupuesto de mudanza"
- En introducción y CTA

**Guardamuebles (`/guardamuebles`):**
- Agregar: "depósito de muebles", "alquilar espacio", "almacenamiento de larga duración"
- En secciones de espacios personalizados

**Inicio (`/`):**
- Agregar: "empresa de transporte", "servicio logístico", "soluciones de mudanza y almacenamiento"

---

## 📊 MÉTRICAS A MONITOREAR

**Después de estas mejoras, revisar mensualmente:**

1. **Google Search Console:**
   - Clics (CTR)
   - Impresiones
   - Posición promedio
   - Problemas de indexación

2. **Google Analytics:**
   - Tráfico orgánico
   - Tasa de rebote
   - Conversiones (contactos via WhatsApp)
   - Páginas más visitadas

3. **Herramientas de SEO:**
   - Ranking de palabras clave
   - Backlinks
   - DA/PA (Domain Authority / Page Authority)

---

## 🎯 OBJETIVOS A 3 MESES

- [ ] Posición #1-3 en Google para "mudanzas Córdoba"
- [ ] Posición #1-3 en Google para "guardamuebles Córdoba"
- [ ] 50+ clics/mes desde búsqueda orgánica
- [ ] Mejorar SEO score a 8.5+/10
- [ ] 0 errores de indexación en Search Console

---

## 🚀 ESTRATEGIA DE CONTENIDO RECOMENDADA

### Nuevos artículos de Blog (Mensual)

**Mes 1:**
- "Costos de mudanza en Córdoba 2024"
- "Cómo elegir empresa de mudanzas confiable"

**Mes 2:**
- "Guía de transporte nacional desde Córdoba"
- "Servicios de guardamuebles: qué es y cómo funciona"

**Mes 3:**
- "Checklist de mudanza para no olvidar nada"
- "Diferencia entre flete y mudanza en Córdoba"

**Cada artículo debe:**
- Tener mínimo 800 palabras
- Incluir 3+ enlaces internos
- Incluir imágenes con alt text
- Tener H2/H3 bien estructura
- Usar palabras clave naturalmente

---

## 💡 TIPS ADICIONALES PARA GOOGLE ADS

Cuando lleves a cabo campañas Google Ads:

1. **Landing pages específicas:**
   - Ad para "mudanzas" → Landing: `/mudanzas`
   - Ad para "guardamuebles" → Landing: `/guardamuebles`

2. **Quality Score:**
   - Asegurar que meta description concuerda con AD copy
   - Alt text en imágenes
   - Breadcrumbs (ayuda a CTR)

3. **Tracking:**
   - Agregar Google Analytics 4
   - Crear conversiones custom (contacto via WhatsApp)
   - Monitorear CPA (Costo Por Acción)

---

## 📞 CONTACTO Y ACTUALIZACIONES

**Si necesitas ajustes después de estas mejoras:**

1. Monitorear Google Search Console mensualmente
2. Revisar ranking de palabras clave cada mes
3. Actualizar contenido si hay cambios en servicios o precios
4. Agregar nuevos testimonios/reviews a página de inicio

---

*Última actualización: Mayo 2024*
*Próxima revisión recomendada: Agosto 2024*
