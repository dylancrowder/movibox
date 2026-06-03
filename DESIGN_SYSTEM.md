# 🎨 Sistema de Diseño Movibox

## Paleta de Colores

### Primario - Azul Movibox
- **Hex:** `#1e3a5f`
- **RGB:** `30, 58, 95`
- **HSL:** `217 68% 25%`
- **Uso:** Botones secundarios, headers, textos destacados, navegación

### Secundario - Naranja Movibox
- **Hex:** `#ff9800`
- **RGB:** `255, 152, 0`
- **HSL:** `39 100% 50%`
- **Uso:** CTAs principales (mudanzas, cotizaciones), énfasis

### WhatsApp Verde
- **Hex:** `#25d366`
- **RGB:** `37, 211, 102`
- **Uso:** SOLO para WhatsApp/conversión inmediata

### Grises Neutrales
- **Negro:** `#0a0e27`
- **Gris Oscuro:** `#4a5568`
- **Gris Medio:** `#cbd5e0`
- **Gris Claro:** `#edf2f7`

### Estados
- **Éxito:** `#4caf50` (Verde)
- **Error:** `#f44336` (Rojo)
- **Advertencia:** `#ffc107` (Amarillo)
- **Info:** `#2196f3` (Azul info)

---

## Componentes de Botones

### Botón Primary (Naranja - CTA Principal)
```tsx
<Button variant="primary" size="default">Cotizar mudanza</Button>
```
- **Fondo:** Naranja `#ff9800`
- **Hover:** Naranja oscuro `#e68900`
- **Sombra:** `shadow-card`
- **Transición:** 200ms

### Botón Secondary (Azul - CTA Secundario)
```tsx
<Button variant="secondary" size="default">Llamar ahora</Button>
```
- **Fondo:** Azul `#1e3a5f`
- **Hover:** Azul claro `#2d5a8f`
- **Sombra:** `shadow-card`

### Botón Outline (Borde - Alternativa)
```tsx
<Button variant="outline" size="default">Ver detalles</Button>
```
- **Borde:** Azul 2px
- **Fondo:** Transparente
- **Hover:** Azul muy claro `#f0f4f9`

### Botón Ghost (Minimal)
```tsx
<Button variant="ghost" size="default">Leer más</Button>
```
- **Solo texto azul**
- **Hover:** Subrayado y cambio de color
- **Uso:** Links, acciones secundarias

### Botón WhatsApp (Verde)
```tsx
<Button variant="whatsapp" size="default">
  <WhatsAppIcon /> Contactar
</Button>
```
- **RESTRICCIÓN:** Usar SOLO para WhatsApp
- **Fondo:** Verde `#25d366`
- **Hover:** Verde oscuro `#1da852`

---

## Badges (Pills)

### Badge Primary (Naranja - Acción)
```tsx
<Badge variant="primary">Mudanzas</Badge>
```
- **Fondo:** Naranja claro `#ffe0b2`
- **Texto:** Naranja oscuro `#e68900`
- **Font:** Bold, 12px, UPPERCASE
- **Uso:** Señalar urgencia, acciones

### Badge Secondary (Azul - Información)
```tsx
<Badge variant="secondary">Guardamuebles</Badge>
```
- **Fondo:** Azul claro `#f0f4f9`
- **Texto:** Azul `#1e3a5f`
- **Uso:** Categorías, información

### Badge Success/Warning/Destructive
```tsx
<Badge variant="success">Confirmado</Badge>
<Badge variant="warning">Pendiente</Badge>
<Badge variant="destructive">Cancelado</Badge>
```

---

## Cards

### Card Estándar
```tsx
<Card>
  <CardHeader>
    <CardTitle>Título</CardTitle>
    <CardDescription>Descripción</CardDescription>
  </CardHeader>
  <CardContent>Contenido</CardContent>
</Card>
```
- **Borde:** Gris `#cbd5e0` 1px
- **Sombra:** `shadow-card`
- **Hover:** `shadow-card-hover` + elevación
- **Border Radius:** `rounded-md` (12px)

---

## Tipografía

### Títulos H1 (Hero)
```tsx
<h1 className="text-h1-mobile sm:text-h1-tablet lg:text-h1-desktop">
  Mudanzas en Córdoba
</h1>
```
- **Desktop:** 60px, bold 900
- **Tablet:** 48px, bold 900
- **Mobile:** 36px, bold 900
- **Color:** Azul `#1e3a5f`

### Títulos H2 (Secciones)
```tsx
<h2 className="text-h2-mobile sm:text-h2-tablet lg:text-h2-desktop">
  Por qué elegirnos
</h2>
```
- **Desktop:** 48px, bold 800
- **Tablet:** 40px, bold 800
- **Mobile:** 28px, bold 800

### Body (Párrafos)
```tsx
<p className="text-body-mobile sm:text-body-tablet lg:text-body-desktop">
  Texto normal...
</p>
```
- **Desktop:** 16px, weight 400
- **Tablet:** 16px, weight 400
- **Mobile:** 14px, weight 400
- **Line Height:** 1.6

### Small (Textos pequeños)
```tsx
<p className="text-small-mobile sm:text-small-tablet lg:text-small-desktop">
  Micro texto...
</p>
```
- **Desktop:** 14px, weight 400
- **Mobile:** 12px, weight 400

---

## Espaciado (Escala 8px)

```
1  = 4px
2  = 8px
3  = 12px
4  = 16px
6  = 24px
8  = 32px
12 = 48px
16 = 64px
```

### Aplicación
- **Gap entre cards:** `gap-8` (32px)
- **Padding card:** `p-6` (24px)
- **Padding sección:** `py-12` o `py-16` (48-64px)
- **Margin entre secciones:** `mt-12` (48px)

---

## Sombras

```css
/* Card estándar */
box-shadow: 0 1px 3px rgba(30, 58, 95, 0.12);

/* Card hover / Elevación */
box-shadow: 0 4px 12px rgba(30, 58, 95, 0.15);

/* Modal / Profundidad */
box-shadow: 0 20px 40px rgba(30, 58, 95, 0.25);

/* Input focus */
box-shadow: 0 0 0 3px rgba(255, 152, 0, 0.1);
```

---

## Border Radius

```
micro = 2px
xs    = 4px
sm    = 8px
md    = 12px
lg    = 16px
full  = 9999px
```

---

## Cómo Usar en Componentes

### ✅ CORRECTO - Usando el Design System

```tsx
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"

export function MudanzasCard() {
  return (
    <Card>
      <CardHeader>
        <Badge variant="primary">Mudanzas</Badge>
        <CardTitle>Servicio completo</CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-body-mobile sm:text-body-desktop text-neutral-600 mb-6">
          Mudanzas residenciales en todo Córdoba.
        </p>
        <div className="flex gap-3">
          <Button variant="primary" size="default">
            Cotizar
          </Button>
          <Button variant="outline">
            Saber más
          </Button>
        </div>
      </CardContent>
    </Card>
  )
}
```

### ❌ INCORRECTO - Estilos inline

```tsx
// ❌ NO HAGAS ESTO
<button className="bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded">
  Click
</button>

// ✅ HAZ ESTO
<Button variant="primary">Click</Button>
```

---

## Checklist de Implementación

- [ ] Config de Tailwind actualizado ✅
- [ ] Componentes Button/Badge/Card actualizados ✅
- [ ] CSS variables en globals.css actualizadas ✅
- [ ] Página Home refactorizada
- [ ] Página Mudanzas refactorizada
- [ ] Página Guardamuebles refactorizada
- [ ] Testing responsive (mobile, tablet, desktop)
- [ ] QA visual en todos los navegadores
- [ ] Deploy

---

## Soporte

Para dudas sobre el design system, revisar:
1. Este archivo (DESIGN_SYSTEM.md)
2. Components en `components/ui/`
3. Tailwind config en `tailwind.config.ts`
