<script setup>
definePageMeta({
  middleware: 'auth'  // Aquí aplicas el middleware
});
useHead({
  title: "Información",
});
</script>
<template>
  <h1 class=" text-4xl text-center text-black font-bold">Información</h1>
  <br></br>
  <div class="container1 px-12">
    <h2 class="text-2xl text-center text-black font-bold mb-5">Objetivo</h2>
    <p class="text-left text-black text-lg">
      Proporcionar una plataforma que permite la consulta y análisis en tiempo real de la calidad del aire en diversas
      localidades de Bogotá, ofreciendo herramientas comparativas, reportes automáticos con gráficos y estadísticas, y
      una interfaz amigable para facilitar la visualización y el seguimiento de los niveles de contaminación en la
      ciudad.

    </p>
  </div>

  <br></br>

  <div class="container1 px-12">
    <h2 class="text-2xl text-center text-black font-bold mb-5">¿Que es la Calidad del aire?</h2>
    <p class="text-left text-black text-lg">
      La calidad del aire hace referencia a lo limpio o contaminado que está el aire que respiramos. Cuando el aire está
      limpio, es seguro respirar y no nos afecta. Pero si está contaminado, puede tener sustancias dañinas, como humo,
      polvo o gases tóxicos, los cuales pueden ser dañinos para la problación general, y especialmente en personas con
      problemas respiratorios, niños y personas mayores. La calidad del aire depende de cosas como los gases que salen
      de los carros, las fábricas, el polvo producido por diferentes factores como lo pueden ser los incendios y las
      condiciones del clima. Es importante medir la calidad del aire para saber si es seguro estar al aire libre.

    </p>
  </div>

  <br></br>

  <div class="container1 px-12">
    <h2 class="text-2xl text-center text-black font-bold mb-5">Niveles de Calidad de Aire según ICA</h2>
    <p class="text-center text-black text-lg">


    </p>




    <table class="table-auto w-full text-left text-black border-collapse">
      <thead>
        <tr class="bg-black text-white">
          <th class="border px-4 py-2">ICA</th>
          <th class="border px-4 py-2">Nivel de contaminación del aire</th>
          <th class="border px-4 py-2">Implicaciones de salud</th>
          <th class="border px-4 py-2">Recomendaciones</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-green-500 text-black">
          <td class="border px-4 py-2">0 - 50</td>
          <td class="border px-4 py-2">Buena</td>
          <td class="border px-4 py-2">La calidad del aire se considera satisfactoria y la contaminación del aire supone
            poco o ningún riesgo.</td>
          <td class="border px-4 py-2">Ninguna</td>
        </tr>
        <tr class="bg-yellow-500 text-black">
          <td class="border px-4 py-2">51 - 100</td>
          <td class="border px-4 py-2">Moderada</td>
          <td class="border px-4 py-2">La calidad del aire es aceptable; sin embargo, para algunos contaminantes puede
            haber una preocupación moderada para un pequeño grupo de personas muy sensibles a la contaminación.</td>
          <td class="border px-4 py-2">Niños y adultos activos, y personas con enfermedades respiratorias como asma,
            deberían limitar el esfuerzo prolongado al aire libre.</td>
        </tr>
        <tr class="bg-orange-500 text-black">
          <td class="border px-4 py-2">101 - 150</td>
          <td class="border px-4 py-2">Insalubre para grupos sensibles</td>
          <td class="border px-4 py-2">Los miembros de grupos sensibles pueden experimentar efectos en su salud. El
            público en general no se verá afectado probablemente.</td>
          <td class="border px-4 py-2">Niños y adultos activos, y personas con enfermedades respiratorias como asma,
            deberían limitar el esfuerzo prolongado al aire libre.</td>
        </tr>
        <tr class="bg-red-500 text-white">
          <td class="border px-4 py-2">151 - 200</td>
          <td class="border px-4 py-2">Insalubre</td>
          <td class="border px-4 py-2">Toda la población puede comenzar a experimentar efectos en su salud; los grupos
            sensibles pueden sufrir efectos más graves.</td>
          <td class="border px-4 py-2">Niños y adultos activos, y personas con enfermedades respiratorias como asma,
            deberían evitar el esfuerzo prolongado al aire libre; el resto de la población, especialmente los niños,
            debería limitar dicho esfuerzo.</td>
        </tr>
        <tr class="bg-purple-700 text-white">
          <td class="border px-4 py-2">201 - 300</td>
          <td class="border px-4 py-2">Muy insalubre</td>
          <td class="border px-4 py-2">Advertencias de condiciones de emergencia. Es probable que toda la población se
            vea afectada.</td>
          <td class="border px-4 py-2">Niños y adultos activos, y personas con enfermedades respiratorias como asma,
            deberían evitar toda actividad al aire libre; el resto de la población, especialmente los niños, debería
            limitar las actividades al aire libre.</td>
        </tr>
        <tr class="bg-amber-800 text-white">
          <td class="border px-4 py-2">300+</td>
          <td class="border px-4 py-2">Peligroso</td>
          <td class="border px-4 py-2">Alerta de salud: todos pueden experimentar efectos graves en la salud.</td>
          <td class="border px-4 py-2">Todo el mundo debería evitar cualquier tipo de actividad al aire libre.</td>
        </tr>
      </tbody>
    </table>



  </div>

  <br></br>

  <div class="container1 px-12">
    <h2 class="text-2xl text-center text-black font-bold mb-5">Documentos legales relacionados a la calidad del aire en
      Colombia</h2>
    <table class="table-auto w-full text-left text-black border-collapse">
      <thead>
        <tr class="bg-blue-500 text-white">
          <th colspan="3" class="border px-4 py-2 text-center font-bold text-lg">LISTA DE DOCUMENTOS</th>
        </tr>
        <tr class="bg-blue-300 text-black">
          <th class="border px-4 py-2 font-semibold">DOCUMENTO</th>
          <th class="border px-4 py-2 font-semibold">TÍTULO</th>
          <th class="border px-4 py-2 font-semibold">ENLACE</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Decreto 948 de 1995</td>
          <td class="border px-4 py-2">Reglamento de Protección y Control de la Calidad del Aire</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/DECRETO_948_DE_1995.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Decreto 2107 de 1995</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/dec_2107_301195.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Decreto 1697 de 1997</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/dec_1697_270697.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Decreto 1552 de 2000</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/dec_1552_150800.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Decreto 2622 de 2000</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/dec_2622_181200.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Decreto 979 de 2006</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/dec_0979_030406.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 601 de 2006</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/Res_601.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 627 de 2006</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/Res_0627.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 909 de 2008</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/Res_0909.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 910 de 2008</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/Res_0910.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 610 de 2010</td>
          <td class="border px-4 py-2">Sin Título</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/Res_0610.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 650 de 2010</td>
          <td class="border px-4 py-2">Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/res_0650_290310.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-white hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 2154 de 2010</td>
          <td class="border px-4 py-2">Protocolo para el Monitoreo y Seguimiento de la Calidad del Aire adoptado a
            través de la Resolución 650 de 2010 y se adoptan otras disposiciones</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/res_2154_021110.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
        <tr class="bg-gray-100 hover:bg-blue-200 transition-colors duration-200">
          <td class="border px-4 py-2">Resolución 2254 de 2017</td>
          <td class="border px-4 py-2">Norma de Calidad del Aire Ambiente y se dictan otras disposiciones</td>
          <td class="border px-4 py-2"><a
              href="https://minas.medellin.unal.edu.co/convenios/redaire/images/normatividad/res_0650_290310.pdf"
              class="text-blue-600 underline">Link</a></td>
        </tr>
      </tbody>
    </table>
  </div>







</template>

<style>
.justified-list {
  text-align: justify;
}

.justified-list::after {
  content: "";
  display: inline-block;
  width: 100%;
}

.container1 {
  text-align: center;

}
</style>
