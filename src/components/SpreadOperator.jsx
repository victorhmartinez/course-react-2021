const SpreadOperator = () => {
    const animalesDomesticos=['Gato','Gallinas','Perros','Loro']
    const animalesSalvajes=['León','Tigre','Puma','Jaguar']
    const animales=[...animalesDomesticos,...animalesSalvajes];
    console.log(animales)
   const modelosAfricas={
    alemania:'Maria',
    polonia:'Mariuxi',
    dinamarca:'Pedrita',
    senegal:'Mayra'
   }
   const modelosEuropeas={
    espania:'Sonia',
    madrid:'Esperanza',
    senegal2:{senegal:"Yadira"}
   }
   const modelos={...modelosAfricas,...modelosEuropeas}
console.log(modelos)
  
  return (<>
    
    </>  );
}
 
export default SpreadOperator;