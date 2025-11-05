import { useForm } from "react-hook-form"

export default function Contact() {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm()

  async function onSubmit(data) {
    console.log("Mensaje:", data)
    alert("Mensaje enviado. Gracias por contactarte con nosotros.")
  }

  return (
    <section className="max-w-xl mx-auto">
      <h1 className="text-4xl font-bold text-brand-500 mb-6 text-center">Contáctanos</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
        <div>
          <label className="block text-sm font-medium">Nombre</label>
          <input
            {...register("name", { required: true })}
            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
            placeholder="Tu nombre"
          />
          {errors.name && <p className="text-red-600 text-sm mt-1">Campo requerido</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Correo</label>
          <input
            {...register("email", { required: true, pattern: /^\S+@\S+$/i })}
            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
            placeholder="tucorreo@ejemplo.com"
          />
          {errors.email && <p className="text-red-600 text-sm mt-1">Correo inválido</p>}
        </div>

        <div>
          <label className="block text-sm font-medium">Mensaje</label>
          <textarea
            {...register("message", { required: true })}
            rows="4"
            className="w-full mt-1 border border-gray-300 rounded-lg p-3 focus:ring-brand-500 focus:border-brand-500"
            placeholder="Cuéntanos en qué podemos ayudarte..."
          ></textarea>
          {errors.message && <p className="text-red-600 text-sm mt-1">Campo requerido</p>}
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="bg-brand-500 text-black w-full py-3 rounded-full hover:bg-brand-600 transition"
        >
          Enviar mensaje
        </button>
      </form>
    </section>
  )
}
