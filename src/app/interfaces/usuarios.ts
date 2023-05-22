export interface ResponseUsers {
    ok:       boolean;
    usuarios: Usuario[];
    total:    number;
}

export interface Usuario {
    role:   string;
    email:  string;
    nombre: string;
    uid:    string;
}