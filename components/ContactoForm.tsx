"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { CheckCircle2, AlertCircle } from "lucide-react";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";

const ContactoSchema = z.object({
  nombre: z.string().min(1, "El nombre es obligatorio"),
  apellido: z.string().min(1, "El apellido es obligatorio"),
  email: z.string().email("Correo inválido"),
  telefono: z.string().min(6, "Teléfono inválido"),
  servicio: z.string().min(1, "Seleccioná un servicio"),
  mensaje: z.string().min(1, "El mensaje es obligatorio"),
});

const serviceOptions = [
  { value: "mudanzas-locales", label: "Mudanzas en Córdoba" },
  { value: "deposito", label: "Guardamuebles y almacenamiento" },
  { value: "fletes", label: "Fletes especializados" },
  { value: "consulta-general", label: "Consulta general" },
];

type ContactoFormData = z.infer<typeof ContactoSchema>;

type FormStatus = "idle" | "success" | "error";

export default function ContactoForm() {
  const [status, setStatus] = useState<FormStatus>("idle");

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset,
  } = useForm<ContactoFormData>({
    resolver: zodResolver(ContactoSchema),
  });

  const onSubmit = async (data: ContactoFormData) => {
    setStatus("idle");
    try {
      const res = await fetch("/api/contacto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        throw new Error("No se pudo enviar el mensaje");
      }

      reset();
      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="rounded-3xl border border-primary/10 bg-white/95 p-8 shadow-lg shadow-primary/5 backdrop-blur">
      <div className="space-y-2">
        <h2 className="text-2xl font-bold text-foreground">Enviá tu consulta</h2>
        <p className="text-sm leading-relaxed text-foreground/70">
          Completá tus datos y contanos qué necesitás. Respondemos cada solicitud en menos de 24 horas
          con un presupuesto personalizado.
        </p>
      </div>

      <form className="mt-8 space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="nombre">Nombre</Label>
            <Input
              id="nombre"
              autoComplete="given-name"
              {...register("nombre")}
              aria-invalid={!!errors.nombre}
            />
            {errors.nombre && (
              <p className="text-sm text-destructive" role="alert">
                {errors.nombre.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="apellido">Apellido</Label>
            <Input
              id="apellido"
              autoComplete="family-name"
              {...register("apellido")}
              aria-invalid={!!errors.apellido}
            />
            {errors.apellido && (
              <p className="text-sm text-destructive" role="alert">
                {errors.apellido.message}
              </p>
            )}
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="space-y-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              type="email"
              autoComplete="email"
              {...register("email")}
              aria-invalid={!!errors.email}
            />
            {errors.email && (
              <p className="text-sm text-destructive" role="alert">
                {errors.email.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="telefono">Teléfono</Label>
            <Input
              id="telefono"
              autoComplete="tel"
              {...register("telefono")}
              aria-invalid={!!errors.telefono}
            />
            {errors.telefono && (
              <p className="text-sm text-destructive" role="alert">
                {errors.telefono.message}
              </p>
            )}
          </div>
        </div>

        <div className="space-y-2">
          <Label htmlFor="servicio">Servicio</Label>
          <select
            id="servicio"
            className="w-full rounded-md border border-input bg-background px-3 py-2 text-sm shadow-sm transition focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary/20"
            {...register("servicio")}
            aria-invalid={!!errors.servicio}
          >
            <option value="">Seleccioná un servicio</option>
            {serviceOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.servicio && (
            <p className="text-sm text-destructive" role="alert">
              {errors.servicio.message}
            </p>
          )}
        </div>

        <div className="space-y-2">
          <Label htmlFor="mensaje">Mensaje</Label>
          <Textarea
            id="mensaje"
            className="min-h-[140px]"
            {...register("mensaje")}
            aria-invalid={!!errors.mensaje}
          />
          {errors.mensaje && (
            <p className="text-sm text-destructive" role="alert">
              {errors.mensaje.message}
            </p>
          )}
        </div>

        <Button
          type="submit"
          size="lg"
          disabled={isSubmitting}
          className="w-full font-semibold shadow-lg shadow-primary/20"
        >
          {isSubmitting ? "Enviando consulta..." : "Enviar mensaje"}
        </Button>
      </form>

      <div className="mt-6 space-y-3">
        <p className="text-xs uppercase tracking-[0.25em] text-primary">Datos protegidos</p>
        <p className="text-sm text-foreground/70">
          La información que nos compartas es confidencial y se utiliza únicamente para coordinar tu
          servicio de mudanzas o transporte.
        </p>
      </div>

      {status !== "idle" && (
        <div className="mt-6 animate-in fade-in slide-in-from-bottom-4 duration-300" aria-live="polite" aria-atomic="true">
          {status === "success" ? (
            <Alert className="border-primary/20 bg-gradient-to-br from-primary/8 to-primary/5 shadow-sm shadow-primary/10">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <AlertTitle className="text-primary font-semibold">¡Mensaje enviado correctamente!</AlertTitle>
              <AlertDescription className="text-foreground/70">
                Te contactaremos a la brevedad para confirmar los detalles y compartirte el presupuesto personalizado.
              </AlertDescription>
            </Alert>
          ) : (
            <Alert variant="destructive" className="border-destructive/20 bg-gradient-to-br from-destructive/8 to-destructive/5">
              <AlertCircle className="h-5 w-5 text-destructive" />
              <AlertTitle className="font-semibold">Error al enviar</AlertTitle>
              <AlertDescription>
                No pudimos procesar tu mensaje. Verificá tus datos o intentá nuevamente en unos minutos.
              </AlertDescription>
            </Alert>
          )}
        </div>
      )}
    </div>
  );
}
