public class LoopExemplo {

    public static void main(String[] args) {

        // define o valor inicial do contador
        int inicio = 1;

        // define o valor final da contagem
        int fim = 5;

        // variável que será atualizada no loop
        int contador = inicio;

        // loop para contar de 'inicio' até 'fim'
        for (int i = inicio; i <= fim; i++) {
            System.out.println("Contagem: " + i);
            // a cada repetição, o valor 'i' é incrementado automaticamente
        }

        // exibe mensagem final no console
        System.out.println("A contagem terminou! (de " + inicio + " até " + fim + ")");
    }
}
