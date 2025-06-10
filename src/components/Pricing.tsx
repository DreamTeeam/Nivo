import { useState } from "react";
import { CheckIcon } from "lucide-react";

const plans = {
  monthly: [
    {
      name: "Plan Básico",
      subtitle: "Perfecto para pequeños negocios que recien estan comenzando",
      price: "$50",
      features: [
        "Dashboard con Analiticas Basicas",
        "Mas de 100 Productos",
        "Almacenamiento en la nube 1 GB",
        "Soporte por Email y Chat",
        "Funciones básicas",
      ],
    },
    {
      name: "Plan Pro",
      subtitle: "Ideal para negocios en crecimiento con mayores demandas",
      price: "$79",
      features: [
        "Dashboard con Analiticas Avanzadas",
        "Productos Ilimitados",
        "Reportes personalizados",
        "Avanzado almacenamiento en la nube",
        "Soporte Prioritario",
      ],
    },
    {
      name: "Plan Empresarial",
      subtitle: "Funciones avanzadas para negocios establecidos",
      price: "$99",
      features: [
        "Soluciones Personalizadas Integradas",
        "Soporte para varias localidades",
        "Protección total para tu negocio",
        "Infraestructura escalable en la nube",
        "Control completo desde un solo lugar",
      ],
    },
  ],
  yearly: [
    {
      name: "Plan Básico",
      subtitle: "Perfecto para pequeños negocios que recien estan comenzando",
      price: "$500",
      features: [
        "Dashboard con Analiticas Basicas",
        "Mas de 100 Productos",
        "Almacenamiento en la nube 1 GB",
        "Soporte por Email y Chat",
        "Funciones básicas",
      ],
    },
    {
      name: "Plan Pro",
      subtitle: "Ideal para negocios en crecimiento con mayores demandas",
      price: "$790",
      features: [
        "Dashboard con Analiticas Avanzadas",
        "Productos Ilimitados",
        "Reportes personalizados",
        "Avanzado almacenamiento en la nube",
        "Soporte Prioritario",
      ],
    },
    {
      name: "Plan Empresarial",
      subtitle: "Funciones avanzadas para negocios establecidos",
      price: "$990",
      features: [
        "Soluciones Personalizadas Integradas",
        "Soporte para varias localidades",
        "Protección total para tu negocio",
        "Infraestructura escalable en la nube",
        "Control completo desde un solo lugar",
      ],
    },
  ],
};

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);
  const selectedPlans = isAnnual ? plans.yearly : plans.monthly;

  return (
    <section id="precios" className="w-full py-12 md:py-24 lg:py-32">
      <div className="container px-4 md:px-6 mx-auto">
        <div className="flex flex-col items-center justify-center space-y-4 text-center">
          <div className="space-y-2">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
              Planes accesibles para hacer crecer tu{" "}
              <span className="text-primary">negocio</span>
            </h2>
            <p className="max-w-[900px] text-base-250 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Explorá nuestros planes de precios flexibles, diseñados para
              adaptarse a empresas de todos los tamaños. Ya sea que estés
              comenzando o en pleno crecimiento, tenemos el plan perfecto para
              vos.
            </p>
          </div>

          <div className="flex items-center space-x-2">
            <span className="text-sm font-medium">Mensual</span>
            <label className="relative inline-flex items-center cursor-pointer">
              <input
                type="checkbox"
                className="sr-only peer"
                checked={isAnnual}
                onChange={() => setIsAnnual(!isAnnual)}
              />
              <div className="w-[40px] h-[20px] bg-neutral-500 peer-checked:bg-[#6e5cc4] rounded-full transition-all duration-200"></div>
              <div className="absolute top-[2px] left-[2px] h-[16px] w-[16px] bg-white rounded-full shadow-md transition-all duration-200 peer-checked:translate-x-[20px]"></div>
            </label>
            <span className="text-sm font-medium">Anual (Ahorras 20%)</span>
          </div>
        </div>

        <div className="grid gap-6 pt-12 lg:grid-cols-3 lg:gap-8">
          {selectedPlans.map((plan) => {
  const isProPlan = plan.name === "Plan Pro";

  return (
    <div
      key={plan.name}
      className={`flex flex-col items-start rounded-xl p-6 border-primary-20 transition-all duration-300 border
        ${isProPlan ? "bg-primary text-white border-primary shadow-lg" : "bg-primary-foreground text-black border-gray-200"}
      `}
    >
      {/* Badge "Popular" */}
      {isProPlan && (
        <span className="self-end absolute bg-accent text-white px-2 py-1 rounded-md mb-2">
          Popular
        </span>
      )}

      <h3 className="text-2xl font-semibold mb-1">{plan.name}</h3>
      <p className="text-4xl font-bold mt-2">{plan.price}</p>
      <span className={`text-base mt-1 mb-4 ${isProPlan ? "text-white/90" : "text-muted-foreground"}`}>
        {plan.subtitle}
      </span>

      <ul className="space-y-3 mt-4 text-left text-sm w-full">
        {plan.features.map((feature, i) => (
          <li key={i} className="flex items-start gap-2">
            <CheckIcon className={`h-4 w-4 mt-1 ${isProPlan ? "text-white" : "text-primary"}`} />
            <span className={isProPlan ? "text-white" : ""}>{feature}</span>
          </li>
        ))}
      </ul>

      <button
        className={`mt-6 py-2 w-full rounded-2xl cursor-pointer hover:bg-[#0d0d0d] transition-all duration-200 ${isProPlan ? "bg-white text-primary hover:text-white" : "bg-primary text-white"}`}
      >
        {plan.name === "Plan Inicial"
          ? "Empezá ahora"
          : `Actualizar a ${plan.name.split(" ")[1]}`}
      </button>
    </div>
  );
})}

        </div>
      </div>
    </section>
  );
}
