*Caminho root https://dark-souls-weapon.herokuapp.com/api/weapon*

Retorna uma lista de armas de dark souls completa

*Parametros:*

       Nome do componente e valor a buscar, se o componente desejado for um objeto, então é nescessario informar o subcomponente
       Ex: /name?value=Dagger -> retorna todas as adagas, /atl/physical?value=100 -> retorna todas as armas com ataque fisico maior que 100
       Obs: Alguns componentes como aotaOnly não é nescessario informar valor.
       O endereço aceita todos os componentes e subcomponentes das armas, e responde de acordo com a logica por tras dele.
       Ex: Ao buscar por determinado peso vai retornar as armas com peso menor do que o passado por parametro, já que é de se esperar que o peso que o jogador esteja
       procurando seja o maximo que caiba em sua build, ja ao buscar por parametros ofensivos a lista vai retornar considerando o parametro passado como o minimo
       
*Filtros:*

       limit: define o limite do retorno passando um value
       order: vai ordenar a lista de acordo com o parametro indicado no value, se não for possivel vai ordenar pelo nome

*Outras rotas*

       /random: Retorna uma arma aleatoria
