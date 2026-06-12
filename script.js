function calcularInsumos() {
    const area = document.getElementById("area").value;
    const resultado = document.getElementById("resultado-calculo");

    if (area === "" || area <= 0) {
        alert("Por favor, insira uma quantidade válida de hectares.");
        return;
    }

    // Cálculos fictícios baseados em boas práticas agrícolas sustentáveis
    const aduboComposto = area * 150; // 150kg por hectare de adubo orgânico
    const aguaEconomizada = area * 2500; // 2500 litros economizados usando gotejamento

    resultado.style.display = "block";
    resultado.style.borderLeftColor = "#4caf50";
    resultado.innerHTML = `
        <strong>📋 Recomendação para ${area} Hectares:</strong><br><br>
        🌱 <strong>Adubo Orgânico:</strong> Use aproximadamente <strong>${aduboComposto} kg</strong>. O uso de compostagem reduz o desgaste químico do solo.<br><br>
        💧 <strong>Manejo de Água:</strong> Adotando o sistema de micro-aspersão ou gotejamento, você economiza até <strong>${aguaEconomizada} litros</strong> nesta área em comparação com a irrigação comum.
    `;
}

function identificarManejo() {
    const praga = document.getElementById("praga").value;
    const resultado = document.getElementById("resultado-manejo");

    resultado.style.display = "block";
    resultado.style.borderLeftColor = "#00796b";

    if (praga === "lagarta") {
        resultado.innerHTML = "🐛 <strong>Solução Biológica:</strong> Utilize o defensivo natural baseado na bactéria <em>Bacillus thuringiensis (Bt)</em> ou liberação de pequenas vespas inimigas naturais Trichogramma. Evita pesticidas químicos e protege polinizadores (como abelhas).";
    } else if (praga === "percevejo") {
        resultado.innerHTML = "🪲 <strong>Solução Biológica:</strong> Use óleo de Neem concentrado ou introduza fungos benéficos como <em>Beauveria bassiana</em>. Controla a população sem contaminar os lençóis freáticos.";
    } else if (praga === "seca") {
        resultado.innerHTML = "🍂 <strong>Diagnóstico de Solo:</strong> Indica falta de nitrogênio ou estresse hídrico severo. Adote a cobertura de solo (Plantio Direto) com palhada para reter a umidade e nutrir a terra naturalmente.";
    }
}