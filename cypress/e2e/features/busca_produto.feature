Feature: Busca por produto no RePlayce

  Como visitante ou usuário
  Quero usar a barra de busca
  Para encontrar produtos por nome, artista ou gênero rapidamente

  Scenario: Busca por nome retorna resultados
    Given que estou na página inicial do RePlayce
    And existem produtos cadastrados com os nomes "Vinil Rock One" e "Vinil Pop Two"
    When eu digito "Vinil Rock One" na barra de busca
    And pressiono Enter
    Then devo ver "Vinil Rock One" na lista de resultados
    And não devo ver "Vinil Pop Two" nos resultados filtrados
