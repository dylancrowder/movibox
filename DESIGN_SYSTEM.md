# 🎨 Sistema de Diseño Movibox - Versión 2.0

> **Última actualización:** Junio 2026  
> **Estado:** Activo y aplicado en todo el proyecto

## 📋 Índice
1. [Paleta de Colores](#paleta-de-colores)
2. [Tipografía](#tipografía)
3. [Espaciados](#espaciados)
4. [Border Radius](#border-radius)
5. [Sombras](#sombras)
6. [Componentes](#componentes)
7. [Reglas de Uso](#reglas-de-uso)

---

## Paleta de Colores

### Primario - Azul Movibox
- **Hex:** `#1e3a5f`
- **Tailwind:** `primary` o `primary-700`
- **Uso:** Botones secundarios, headers, textos destacados, navegación
- **Variantes:**
  - `primary-50` a `primary-950` (escala completa)
  - `primary-foreground` (texto sobre fondo primary)

### Secundario - Naranja Movibox
- **Hex:** `#ff9800`
- **Tailwind:** `secondary` o `secondary-500`
- **Uso:** CTAs principales (mudanzas, cotizaciones), énfasis
- **Variantes:**
  - `secondary-50` a `secondary-950` (escala completa)
  - `secondary-foreground` (texto sobre fondo secondary)

### WhatsApp Verde
- **Hex:** `#25d366`
- **Tailwind:** `whatsapp` o `whatsapp-500`
- **Uso:** SOLO para WhatsApp/conversión inmediata
- **⚠️ REGLA:** Usar `variant="whatsapp"` en componente Button

### Grises Neutrales
- **Tailwind:** `neutral-50` a `neutral-950`
- **Uso:** Textos secundarios, fondos, bordes
- **Variantes principales:**
  - `neutral-50`: Fondo muy claro
  - `neutral-100`: Fondo claro
  - `neutral-600`: Texto secundario
  - `neutral-700`: Texto terciario
  - `neutral-900`: Texto casi negro

### Estados
- **Éxito:** `success` (#4caf50)
- **Error:** `error` (#f44336)
- **Advertencia:** `warning` (#ffc107)
- **Info:** `info` (#2196f3)

### ❌ COLORES OBSOLETOS (NO USAR)
- `brand-orange` → usar `secondary`
- `brand-darkblue` → usar `primary`
- `brand-lightblue` → usar `primary-600`
- `brand-deep` → usar `primary`
- `brand-bright` → usar `secondary`

---

## Tipografía

### Escala Responsive (definida en tailwind.config.ts)

#### H1 - Hero Title
```tsx
<h1 className="text-h1-mobile sm:text-h1-tablet lg:text-h1-desktop">
  Mudanzas en Córdoba
</h1>
```
- **Mobile:** 36px, font-weight 900, line-height 1.1
- **Tablet:** 48px, font-weight 900, line-height 1.1
- **Desktop:** 60px, font-weight 900, line-height 1.1
- **Uso:** Título principal de la página (hero section)

#### H2 - Section Title
```tsx
<h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop">
  Por qué elegirnos
</h2>
```
- **Mobile:** 28px, font-weight 800, line-height 1.2
- **Tablet:** 40px, font-weight 800, line-height 1.2
- **Desktop:** 48px, font-weight 800, line-height 1.2
- **Uso:** Títulos de secciones principales

#### H3 - Subsection Title
```tsx
<h3 className="text-h3-mobile sm:text-h3-tablet lg:text-h3-desktop">
  Servicio completo
</h3>
```
- **Mobile:** 24px, font-weight 700, line-height 1.2
- **Tablet:** 28px, font-weight 700, line-height 1.2
- **Desktop:** 32px, font-weight 700, line-height 1.2
- **Uso:** Títulos de cards, subsections

#### H4 - Card Title
```tsx
<h4 className="text-h4-mobile sm:text-h4-tablet lg:text-h4-desktop">
  Detalles del servicio
</h4>
```
- **Mobile:** 18px, font-weight 700, line-height 1.3
- **Tablet:** 20px, font-weight 700, line-height 1.3
- **Desktop:** 24px, font-weight 700, line-height 1.3
- **Uso:** Títulos dentro de cards

#### Body Text
```tsx
<p className="text-body-mobile sm:text-body-tablet lg:text-body-desktop">
  Texto normal...
</p>
```
- **Mobile:** 14px, font-weight 400, line-height 1.6
- **Tablet:** 16px, font-weight 400, line-height 1.6
- **Desktop:** 16px, font-weight 400, line-height 1.6
- **Uso:** Párrafos, descripciones

#### Small Text
```tsx
<p className="text-small-mobile sm:text-small-tablet lg:text-small-desktop">
  Micro texto...
</p>
```
- **Mobile:** 12px, font-weight 400, line-height 1.5
- **Tablet:** 14px, font-weight 400, line-height 1.5
- **Desktop:** 14px, font-weight 400, line-height 1.5
- **Uso:** Leyendas, disclaimers, textos auxiliares

### ⚠️ REGLAS DE TIPOGRAFÍA
- **SIEMPRE** usar clases responsive del design system
- **NUNCA** usar tamaños hardcoded como `text-4xl`, `text-2xl`
- **NUNCA** usar font-weight hardcoded como `font-black`, `font-bold`
- Usar `text-primary` para títulos principales
- Usar `text-neutral-600` para textos secundarios
- Usar `text-neutral-700` para textos terciarios

---

## Espaciados

### Escala (definida en tailwind.config.ts)
```
spacing.1  = 4px
spacing.2  = 8px
spacing.3  = 12px
spacing.4  = 16px
spacing.6  = 24px
spacing.8  = 32px
spacing.12 = 48px
spacing.16 = 64px
```

### Aplicación Estándar

#### Secciones
```tsx
<section className="py-16 sm:py-32">
  {/* Contenido */}
</section>
```
- **Mobile:** padding vertical 64px
- **Desktop:** padding vertical 128px

#### Cards
```tsx
<div className="p-6">
  {/* Contenido de card */}
</div>
```
- **Padding:** 24px (estándar)
- **Para cards grandes:** usar `p-8` (32px)

#### Gap entre elementos
```tsx
<div className="gap-4">  {/* 16px - elementos cercanos */}
<div className="gap-6">  {/* 24px - elementos relacionados */}
<div className="gap-8">  {/* 32px - cards, secciones */}
```

#### Margin entre secciones
```tsx
<section className="mt-12">  {/* 48px */}
<section className="mt-16"> {/* 64px */}
```

---

## Border Radius

### Escala (definida en tailwind.config.ts)
```
borderRadius.micro = 2px
borderRadius.xs    = 4px
borderRadius.sm    = 8px
borderRadius.md    = 12px
borderRadius.lg    = 16px
borderRadius.full  = 9999px
```

### Aplicación Estándar

#### Botones
- **sm:** `rounded-xs` (4px)
- **default:** `rounded-sm` (8px)
- **lg:** `rounded-sm` (8px)
- **icon:** `rounded-sm` (8px)

#### Cards
- **Estándar:** `rounded-md` (12px)
- **Destacadas:** `rounded-lg` (16px)

#### Badges
- **Todos:** `rounded-full` (circular)

#### Inputs
- **Estándar:** `rounded-sm` (8px)

### ⚠️ REGLAS DE BORDER RADIUS
- **NUNCA** usar `rounded-2xl`, `rounded-3xl` (no existen en el sistema)
- Usar siempre las clases definidas arriba
- Para bordes muy redondeados usar `rounded-full`

---

## Sombras

### Escala (definida en tailwind.config.ts)
```css
shadow-card:        0 1px 3px rgba(30, 58, 95, 0.12)
shadow-card-hover:  0 4px 12px rgba(30, 58, 95, 0.15)
shadow-modal:       0 20px 40px rgba(30, 58, 95, 0.25)
shadow-input-focus: 0 0 0 3px rgba(255, 152, 0, 0.1)
```

### Aplicación
- **Cards estáticas:** `shadow-card`
- **Cards hover:** `shadow-card-hover`
- **Modales:** `shadow-modal`
- **Inputs focus:** `shadow-input-focus`

---

## Componentes

### Button
```tsx
import { Button } from "@/components/ui/button"

// Primary (Naranja - CTA principal)
<Button variant="primary" size="default">Cotizar</Button>

// Secondary (Azul - CTA secundario)
<Button variant="secondary" size="default">Llamar</Button>

// Outline (Borde)
<Button variant="outline" size="default">Ver más</Button>

// Ghost (Minimal)
<Button variant="ghost" size="default">Leer más</Button>

// WhatsApp (SOLO para WhatsApp)
<Button variant="whatsapp" size="default">
  <WhatsAppIcon /> Contactar
</Button>

// Destructive (Acciones destructivas)
<Button variant="destructive" size="default">Eliminar</Button>

// Link (Solo texto)
<Button variant="link" size="default">Ir a</Button>
```

#### Sizes
- `sm`: height 36px, padding 16px, font-size 12px
- `default`: height 44px, padding 24px, font-size 14px
- `lg`: height 48px, padding 32px, font-size 16px
- `icon`: height 40px, width 40px

### Badge
```tsx
import { Badge } from "@/components/ui/badge"

<Badge variant="primary">Mudanzas</Badge>
<Badge variant="secondary">Guardamuebles</Badge>
<Badge variant="success">Confirmado</Badge>
<Badge variant="warning">Pendiente</Badge>
<Badge variant="destructive">Cancelado</Badge>
<Badge variant="outline">Categoría</Badge>
```

### Card
```tsx
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card"

<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido</CardContent>
</Card>
```

---

## Reglas de Uso

### ✅ CORRECTO

```tsx
// Usar componentes del design system
<Button variant="primary">Cotizar</Button>
<Badge variant="secondary">Guardamuebles</Badge>

// Usar clases de tipografía del design system
<h1 className="text-h1-mobile sm:text-h1-tablet lg:text-h1-desktop">
  Mudanzas en Córdoba
</h1>

// Usar colores del design system
<div className="bg-primary text-primary-foreground">
<div className="bg-secondary text-secondary-foreground">

// Usar border radius del design system
<div className="rounded-md">
<div className="rounded-full">
```

### ❌ INCORRECTO

```tsx
// NO usar estilos inline
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
  Click
</button>

// NO usar colores obsoletos
<div className="bg-brand-orange">
<div className="bg-brand-deep">

// NO usar tamaños de fuente hardcoded
<h1 className="text-4xl font-black">
<h2 className="text-2xl font-bold">

// NO usar border radius no definidos
<div className="rounded-2xl">
<div className="rounded-3xl">

// NO usar colores hexadecimales hardcodeados
<div className="bg-[#25D366]">
<div className="bg-[#ff9800]">
```

---

## Migración desde código legacy

### Paso 1: Reemplazar colores obsoletos
```bash
# Buscar y reemplazar
brand-orange → secondary
brand-darkblue → primary
brand-lightblue → primary-600
brand-deep → primary
brand-bright → secondary
```

### Paso 2: Reemplazar botones inline
```tsx
// ANTES
<button className="bg-[#25D366] text-white rounded-full p-3">
  WhatsApp
</button>

// DESPUÉS
<Button variant="whatsapp" size="icon">
  <WhatsAppIcon />
</Button>
```

### Paso 3: Reemplazar tipografía hardcoded
```tsx
// ANTES
<h1 className="text-4xl font-black text-white sm:text-6xl">
  Título
</h1>

// DESPUÉS
<h1 className="text-h1-mobile sm:text-h1-tablet lg:text-h1-desktop text-white">
  Título
</h1>
```

### Paso 4: Reemplazar border radius no definidos
```tsx
// ANTES
<div className="rounded-2xl">

// DESPUÉS
<div className="rounded-lg">
```

---

## Checklist de Implementación

### Configuración
- [x] Tailwind config actualizado con colores correctos
- [x] CSS variables en globals.css actualizadas
- [x] Documento de auditoría creado

### Componentes UI
- [x] Button component actualizado
- [x] Badge component actualizado
- [x] Card component actualizado

### Componentes Personalizados
- [ ] whatsapp-button.tsx refactorizado
- [ ] cta-floating-buttons.tsx refactorizado
- [ ] image-carousel.tsx refactorizado
- [ ] GoogleReviews.tsx refactorizado
- [ ] Inicio.tsx refactorizado

### Páginas
- [ ] app/page.tsx - colores obsoletos reemplazados
- [ ] app/mudanzas/page.tsx - colores obsoletos reemplazados
- [ ] app/guardamuebles/page.tsx - colores obsoletos reemplazados
- [ ] app/faq/page.tsx - colores obsoletos reemplazados
- [ ] app/contacto/page.tsx - colores obsoletos reemplazados
- [ ] app/blog/* - colores obsoletos reemplazados

### Testing
- [ ] Testing responsive (mobile, tablet, desktop)
- [ ] QA visual en todos los navegadores
- [ ] Verificar que no queden colores obsoletos
- [ ] Verificar que todos los botones usen componente Button

---

## Soporte

Para dudas sobre el design system:
1. Revisar este archivo (DESIGN_SYSTEM.md)
2. Revisar el documento de auditoría (DESIGN_SYSTEM_AUDIT.md)
3. Revisar componentes en `components/ui/`
4. Revisar Tailwind config en `tailwind.config.ts`
