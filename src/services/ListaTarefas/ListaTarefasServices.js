 import TarefaModel from "/home/cmf/Documents/CursoIteris/todo/src/models/TarefaModel.js";

 // Função de construção do objeto que vamos compartilhar
 // Usada na inicialização

 export function listaTarefasContextBuilder ([
    listaDeTarefas,
    setListaDeTarefas,
 ]) {
   return {
      listaDeTarefas, 
      adicionarTarefa: (tarefa) => 
      setListaDeTarefas(adicionar(listaDeTarefas, tarefa))
   }
 }

 // funções privadas para tratamento de dados
 function adicionar(listaDeTarefas, descricaoTarefa) {
   const novaTarefa = new TarefaModel(
      listaDeTarefas.length + 1,
      descricaoTarefa
   );
   return [...listaDeTarefas, novaTarefa]
 }