import { useState } from "react";
import { ChevronDown } from "lucide-react";


const faqs = [
  {
    question: "¿Qué es un sistema POS?",
    answer:
      "Un sistema POS (Point of Sale o Punto de Venta) es una herramienta que te permite gestionar ventas, inventario, pagos y clientes desde un solo lugar.",
  },
  {
    question: "¿Qué beneficios me ofrece?",
    answer:
      "Con un sistema POS puedes automatizar procesos, reducir errores, obtener reportes en tiempo real y ofrecer una mejor experiencia a tus clientes.",
  },
  {
    question: "¿Necesito conexión a internet para usarlo?",
    answer:
      "Depende del sistema. Nuestro POS funciona tanto online como offline, sincronizando los datos cuando recupera la conexión.",
  },
  {
    question: "¿Puedo gestionar múltiples sucursales?",
    answer:
      "Sí, nuestro sistema permite controlar y administrar varias sucursales desde una misma cuenta, con reportes individuales o consolidados.",
  },
  {
    question: "¿Qué tipo de negocios pueden usar este POS?",
    answer:
      "Está diseñado para adaptarse a distintos rubros como tiendas, restaurantes, ferreterías, indumentaria, y más. Es flexible y configurable según tu tipo de negocio.",
  },
];

const Faq = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleIndex = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section className="bg-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl text-base-3 font-bold tracking-tight  sm:text-4xl mb-8">
          Preguntas frecuentes
        </h2>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border-b border-gray-200 pb-4">
              <button
                type="button"
                onClick={() => toggleIndex(index)}
                className="flex items-center justify-between w-full py-3 text-left text-base-300 font-medium focus:outline-none"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="mt-2 text-base-300 text-sm transition-all duration-200 ease-in-out">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;