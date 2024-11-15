export default class Contestant{

    #name: string;
    #group: string;
    #nation: string;
    #natCode: string;
    #throws: number[];

    constructor(row:string){
        let data: string[] = row.split(';');
        this.#name = data[0];
        this.#group = data[1];

        let nationSplitted: string[] = data[2].split(' ');
        this.#nation = nationSplitted[0];
        this.#natCode = nationSplitted[1].substring(1, nationSplitted[1].length-1);

        this.#throws = [];
        for (let i = 3; i <= 5; i++) {            
            if(data[i] == 'X')
                this.#throws.push(-1.0);
            if(data[i] == '-')
                this.#throws.push(-2.0);
            else
                this.#throws.push(+(data[i].replace(',', '.')));
        }
    }
}