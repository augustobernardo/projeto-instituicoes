class Instituicoes {
    constructor(
        public id: number,
        public title: string,
        public description: string,
        public image: string
    ) {}

    returnInstituicao() {
        return {
            id: this.id,
            Title: this.title,
            description: this.description,
        };
    }
}

class InstituicoesArray {
    instituicoes: Instituicoes[] = [];

    constructor() {
        this.instituicoes = [
            new Instituicoes(
                1,
                "Casa do Zezinho",
                "Espaço de oportunidades de desenvolvimento de crianças e jovens em situação de vulnerabilidade social.",
                "/img/logo_casa_do_zezinho.png"
            ),

            new Instituicoes(
                2,
                "Projeto Guri",
                "Promovendo a inclusão e a transformação social através da música, o Projeto Guri é considerado o maior programa sociocultural brasileiro",
                "/img/logo_guri.png"
            ),

            new Instituicoes(
                3,
                "Instituto do Câncer Infantil",
                "Por meio do ICI, crianças e adolescentes contam com o apoio pedagógico, psicológico, nutricional, odontológico, medicamentos, exames especiais, além de vestuários, calçados e alimentos.",
                "/img/logo_ici_2.png"
            ),

            new Instituicoes(
                4,
                "Associação VagaLume",
                "Esta associação empodera crianças de comunidades da Amazônia a partir da promoção da leitura e gestão de bibliotecas comunitárias como espaço para compartilhar saberes.",
                "/img/logo_vagalume.png"
            ),

            new Instituicoes(
                5,
                "Projeto Velho Amigo",
                "Promove a cultura de inclusão do idoso, assegurando seus direitos e valorizando sua contribuição para a sociedade.",
                "/img/logo_velho_amigo.svg"
            ),
        ];
    }

    returnInstituicoes() {
        return this.instituicoes;
    }
}

export default InstituicoesArray;
