# Introdução
A Skynet decidiu produzir androids em massa, cada android deve possuir um número de série **ALEATÓRIO** e **ÚNICO** no formato **LLNNN**, ou seja: letra + letra + número + número + número.
Por exemplo: TW232 ou MS120


Às vezes um android sofre alguma falha e deve ser resetado. Quando isso acontecer, este android deve ter receber um novo número de série e o número de série antigo nunca mais pode ser utilizado.


Note, os números de série devem ser aleatórios, ou seja, o android AA002 não deve vir depois do android AA001 (a não ser que isso seja uma tremenda coincidência).


Sua solução deve garantir que nunca hajam 2 robôs com o mesmo número de série.

## Problema
Modifique a classe **Android** do arquivo **android.rb** para que atenda os pré-requisitos acima

## Ajudinha
Para ajudar, criamos um arquivo de testes com 2 testes
- Valida se o número de série segue o padrão estabelecido no problema
- Valida se ao rodar o comando **resetar** o número do android mudou *(esse teste está quebrado de propósito, no meio da sua trajetória para solucionar o problema ele deve se solucionar sozinho)*

Se você quiser rodar os testes basta rodar o comando no terminal: 
gem install minitest
 ruby android_test.rb

## Licença poética
Esteja livre para modificar (levemente) o problema caso seja do seu interesse, queremos entender sua linha de raciocínio e como você programa.
Caso queira adicionar mais testes, comentar seu código, adicionar ou modificar a documentação, sinta-se a vontade

