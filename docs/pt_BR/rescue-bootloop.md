# Resgate do bootloop

[[toc]]

---

O IcePatch possui um mecanismo de resgate de bootloop integrado que pode ajudá-lo a desativar rapidamente todos os módulos e reiniciar o dispositivo se algum módulo malicioso for flashado e o dispositivo não inicializar.

::: warning AVISO
Isso só pode ajudá-lo **quando o dispositivo não pode ser inicializado devido a módulos maliciosos ou conflitante**. Porém, este guia **não pode ajudá-lo a resolver problemas como a restauração de fábrica ou perda de dados!**
:::

## Mecanismos integrados

- Pressionando o botão de diminuir volume

Após **pressionar longamente o botão liga/desliga até a tela ligar, pressione e solte continuamente até que a primeira tela acenda**. Desta forma, o Modo de Segurança integrado do IcePatch será ativado e todos os módulos serão desativados.

::: info INFORMAÇÕES
O IcePatch tem uma ampla gama de detecção para os botões de volume. Mesmo que o `post-fs` tenha sido executado, o IcePatch reverterá quaisquer alterações feitas nela se detectar um sinal do Modo de Segurança.

Em outras palavras, essa verificação ocorre antes de `sys.boot_completed=1`.
:::

- Entrando no Modo de Segurança

Algumas ROMs, como a MIUI/Xiaomi HyperOS, podem ativar o Modo de Segurança em seu Recovery. Reiniciar para o Recovery e ativar o Modo de Segurança que vem com a ROM também iniciará o Modo de Segurança do IcePatch.

---

::: tip DICA
Após entrar no Modo de Segurança, todos os módulos na página de módulos do sistema do IcePatch serão desativados. No entanto, você pode realizar a operação "Desinstalar" para desinstalar os módulos que podem estar causando problemas.
:::

## Alguns problemas

### Mesmo depois de ativar o Modo de Segurança, o sistema ainda pode travar.

Isso pode ocorrer devido a falhas ao reverter as modificações do `post-fs`, o que pode causar o travamento. Uma reinicialização forçada deve resolver o problema.

### Não consigo ver o IcePatch após entrar no Modo de Segurança via Recovery.

Você pode entrar no Modo de Segurança do Android.

Ao entrar no Modo de Segurança do Android, existe uma regra importante: todos os apps que não fazem parte do sistema serão desativados pelo Android. O IcePatch não é considerado um app do sistema, portanto, esta regra resultará na desativação do IcePatch após entrar no Modo de Segurança.

Esse comportamento é normal e mostra que tanto o Modo de Segurança do Android quanto o Modo de Segurança do IcePatch estão funcionando corretamente, desde que o IcePatch não tenha sido consolidado como um app do sistema. O que você precisa fazer é apenas reiniciar o dispositivo novamente e o Android sairá do Modo de Segurança com o IcePatch restaurado. No entanto, o IcePatch não sairá do Modo de Segurança automaticamente. Nesse caso, você pode desativar qualquer APMódulo que tenha causado problemas neste caso.
