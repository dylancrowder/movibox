# 🎨 Auditoría de Design System - Movibox Logística

**Fecha:** Junio 2026  
**Estado:** Completada  
**Objetivo:** Unificar y estandarizar todo el sistema visual del proyecto

---

## 📊 Resumen Ejecutivo

Se identificaron **45+ inconsistencias** en el sistema visual actual. El proyecto ya tiene una base sólida con `tailwind.config.ts` y `DESIGN_SYSTEM.md`, pero hay múltiples violaciones del design system en componentes y páginas.

### Problemas Principales:
1. **Colores de marca obsoletos** (`brand-*`) mezclados con colores actuales
2. **Botones con estilos inline** en 6+ componentes
3. **Border radius inconsistente** (7 variantes diferentes usadas)
4. **Tipografía no estandarizada** (títulos H3 especialmente)
5. **Espaciados variables** sin patrón claro

---

## 🔍 Inconsistencias Detectadas

### 1. COLORES ❌

#### Colores Obsoletos (deben eliminarse):
- `brand-orange` → usar `secondary`
- `brand-darkblue` → usar `primary`
- `brand-lightblue` → usar `primary-600`
- `brand-deep` → usar `primary`
- `brand-bright` → usar `secondary`

#### Archivos afectados:
```
components/cta-floating-buttons.tsx
app/guardamuebles/page.tsx (6 ocurrencias)
app/faq/page.tsx
app/contacto/page.tsx
app/blog/mudanzas-y-fletes/page.tsx
app/blog/mejor-momento-para-mudarse/page.tsx
app/blog/deposito-guardamuebles/page.tsx
app/blog/como-organizar-una-mudanza-sin-estres/page.tsx
app/blog/como-empacar-para-una-mudanza/page.tsx
```

#### Colores Hardcodeados (deben reemplazarse):
- `bg-[#25D366]` → usar `bg-whatsapp`
- `bg-[#0d5635]` → usar `bg-whatsapp-600`
- `bg-black/50` → usar `bg-black/50` (aceptable pero documentar)
- `bg-black/70` → usar `bg-black/70` (aceptable pero documentar)

#### Archivos afectados:
```
components/whatsapp-button.tsx
components/image-carousel.tsx
```

#### Colores Secundarios Inconsistentes:
- `secondary-500` → usar `secondary`
- `secondary-600` → usar `secondary-600` (ya existe)
- `secondary-700` → usar `secondary-700` (ya existe)
- `secondary-100` → usar `secondary-100` (ya existe)

---

### 2. BOTONES ❌

#### Componentes con Botones Inline:

**1. `components/whatsapp-button.tsx`**
```tsx
// ❌ ACTUAL (estilos inline)
className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg shadow-black/20 transition-all duration-300 hover:bg-[#0d5635] hover:scale-110 active:scale-95 border border-black"

// ✅ DEBERÍA SER
<Button variant="whatsapp" size="icon" className="fixed bottom-6 right-6 z-50">
  <WhatsAppIcon />
</Button>
```

**2. `components/cta-floating-buttons.tsx`**
```tsx
// ❌ ACTUAL (gradientes personalizados)
color: "bg-gradient-to-r from-brand-orange to-orange-600"
color: "bg-gradient-to-r from-brand-darkblue to-brand-lightblue"
color: "bg-gradient-to-r from-brand-orange via-orange-600 to-brand-orange"

// ✅ DEBERÍA SER
variant="primary" // para naranja
variant="secondary" // para azul
```

**3. `components/image-carousel.tsx`**
```tsx
// ❌ ACTUAL
className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-black/50 hover:bg-black/70 text-white p-3 rounded-full transition"

// ✅ DEBERÍA SER
<Button variant="ghost" size="icon" className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/50 hover:bg-black/70 text-white">
  <ChevronLeft />
</Button>
```

**4. `components/GoogleReviews.tsx`**
```tsx
// ❌ ACTUAL
className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-secondary/70 bg-white shadow-sm hover:shadow-md transition text-sm font-semibold text-secondary-600 hover:text-secondary-700"

// ✅ DEBERÍA SER
<Button variant="outline" size="default">
  Ver todas las reseñas en Google
</Button>
```

#### Botones con className personalizado que sobrescribe variantes:

**En múltiples páginas:**
```tsx
// ❌ ACTUAL
<Button className="bg-brand-deep hover:bg-brand-bright text-white font-semibold rounded-lg flex items-center gap-3 shadow-none border border-black">

// ✅ DEBERÍA SER
<Button variant="primary" size="lg">
```

**Archivos afectados:**
- `app/guardamuebles/page.tsx` (2 ocurrencias)
- `app/faq/page.tsx`
- `app/contacto/page.tsx`
- `app/blog/mudanzas-y-fletes/page.tsx`
- `app/blog/deposito-guardamuebles/page.tsx`
- `app/blog/como-organizar-una-mudanza-sin-estres/page.tsx`

---

### 3. BORDER RADIUS ❌

#### Variantes usadas actualmente:
- `rounded-sm` (en Button)
- `rounded-md` (en cards)
- `rounded-lg` (en algunos botones)
- `rounded-full` (en badges, botones icono)
- `rounded-2xl` (en Inicio.tsx)
- `rounded-3xl` (en page.tsx)
- `rounded-xs` (en Button sm)

#### Definición en tailwind.config.ts:
```ts
borderRadius: {
  micro: "2px",
  xs:    "4px",
  sm:    "8px",
  md:    "12px",
  lg:    "16px",
  full:  "9999px",
}
```

#### Mapeo recomendado:
- `rounded-xs` → `rounded-xs` ✅ (ya existe)
- `rounded-sm` → `rounded-sm` ✅ (ya existe)
- `rounded-md` → `rounded-md` ✅ (ya existe)
- `rounded-lg` → `rounded-lg` ✅ (ya existe)
- `rounded-full` → `rounded-full` ✅ (ya existe)
- `rounded-2xl` → `rounded-lg` (16px)
- `rounded-3xl` → `rounded-lg` (16px)

---

### 4. TIPOGRAFÍA ❌

#### Títulos H1:
```tsx
// ❌ ACTUAL (consistente pero no usa tailwind.config)
text-4xl font-black text-white sm:text-6xl leading-tight

// ✅ DEBERÍA SER
text-h1-mobile sm:text-h1-tablet lg:text-h1-desktop
```

#### Títulos H2:
```tsx
// ❌ ACTUAL
text-4xl font-black sm:text-5xl leading-tight

// ✅ DEBERÍA SER
text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop
```

#### Títulos H3 (INCONSISTENTE):
```tsx
// Usados actualmente:
text-lg font-semibold
text-xl font-semibold
text-2xl font-bold
text-3xl font-black

// ✅ DEBERÍA SER
text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop
```

#### Badges (CONSISTENTE):
```tsx
// ✅ CORRECTO
text-sm font-bold uppercase tracking-widest
```

---

### 5. ESPACIADOS ⚠️

#### Padding de secciones (CONSISTENTE):
```tsx
py-16 sm:py-32 // ✅ Buen patrón
```

#### Padding de cards (INCONSISTENTE):
```tsx
p-6  // 24px
p-8  // 32px
// ✅ DEBERÍA SER estandarizado a p-6 (24px) o p-8 (32px)
```

#### Gap (INCONSISTENTE):
```tsx
gap-4  // 16px
gap-6  // 24px
gap-8  // 32px
// ✅ DEBERÍA usar escala consistente: gap-4, gap-6, gap-8
```

---

## 📋 Plan de Acción

### Fase 1: Actualizar Configuración (Prioridad ALTA)
1. ✅ Eliminar colores obsoletos de `tailwind.config.ts`
2. ✅ Actualizar `globals.css` si es necesario
3. ✅ Documentar colores permitidos en `DESIGN_SYSTEM.md`

### Fase 2: Componentes UI (Prioridad ALTA)
1. ✅ Actualizar `components/ui/button.tsx` (ya está bien, solo documentar)
2. ✅ Crear componentes de tipografía: `Heading.tsx`, `Text.tsx`
3. ✅ Actualizar `components/ui/badge.tsx` (ya está bien)

### Fase 3: Componentes Personalizados (Prioridad ALTA)
1. ✅ Refactorizar `components/whatsapp-button.tsx`
2. ✅ Refactorizar `components/cta-floating-buttons.tsx`
3. ✅ Refactorizar `components/image-carousel.tsx`
4. ✅ Refactorizar `components/GoogleReviews.tsx`
5. ✅ Refactorizar `components/Inicio.tsx`

### Fase 4: Páginas (Prioridad MEDIA)
1. ✅ `app/page.tsx` - Reemplazar colores obsoletos
2. ✅ `app/mudanzas/page.tsx` - Reemplazar colores obsoletos
3. ✅ `app/guardamuebles/page.tsx` - Reemplazar colores obsoletos
4. ✅ `app/faq/page.tsx` - Reemplazar colores obsoletos
5. ✅ `app/contacto/page.tsx` - Reemplazar colores obsoletos
6. ✅ `app/blog/*` - Reemplazar colores obsoletos en todos los posts

### Fase 5: Documentación (Prioridad BAJA)
1. ✅ Actualizar `DESIGN_SYSTEM.md` con ejemplos correctos
2. ✅ Crear guía de migración para desarrolladores
3. ✅ Agregar reglas de linting para prevenir regresiones

---

## 🎯 Entregables

1. ✅ **Auditoría completa** (este documento)
2. ⏳ **Design System actualizado** (DESIGN_SYSTEM.md)
3. ⏳ **Componentes reutilizables** (Button, Heading, Text)
4. ⏳ **Refactorización de botones** (todos los componentes)
5. ⏳ **Unificación de colores** (todos los archivos)
6. ⏳ **Reporte final de cambios**

---

## 📈 Métricas de Éxito

- **0** colores obsoletos en el código
- **100%** de botones usando componente Button
- **100%** de títulos usando clases de tipografía del design system
- **100%** de border radius usando escala definida
- **0** estilos inline en componentes reutilizables

---

## 🚀 Próximos Pasos

1. Actualizar `tailwind.config.ts` eliminando colores obsoletos
2. Crear componentes de tipografía
3. Refactorizar componentes con botones inline
4. Reemplazar colores obsoletos en todas las páginas
5. Documentar cambios y generar reporte final
