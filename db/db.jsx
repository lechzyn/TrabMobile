import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabaseSync('trabalho.db');

export async function initDB(){
    await db.execAsync(`
        PRAGMA journal_mode = WAL;
        CREATE TABLE IF NOT EXISTS Medico(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            especialidade TEXT,
            crm TEXT,
            foto TEXT,
            senha TEXT
        );
        CREATE TABLE IF NOT EXISTS Usuario(
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            nome TEXT NOT NULL,
            cpf NUMBER NOT NULL,
            rg NUMBER,
            data_nascimento DATE,
            senha TEXT
        );
    `);
    console.log('Criando o banco de dados');
}

export async function addMedico(nome,especialidade,crm,foto,senha) {
    console.log('Inserindo médico...');
     await db.runAsync('INSERT INTO Medico (nome,especialidade,crm,foto,senha) VALUES (?,?,?,?,?);',
        nome,especialidade,crm,foto,senha);
}

export async function addUsuario(nome,cpf,rg,data_nascimento,senha){
    console.log('Inserindo usuário...');
     await db.runAsync('INSERT INTO Usuario (nome,cpf,rg,data_nascimento,senha) VALUES (?,?,?,?,?);',
        nome,cpf,rg,data_nascimento,senha);
}

export async function getMedicos(){
    console.log('Consultando médicos...');
    return await db.getAllAsyncAsync('SELECT * FROM Medico');
}

export async function getUsuarios(){
    console.log('Consultando usuários...');
   return await db.getAllAsync('SELECT * FROM Usuario');
}

export async function editarMedico(id,nome,especialidade,crm,foto,senha) {
    await db.runAsync('UPDATE Medico SET nome=? , especialidade=?, crm=?,foto=? ,senha=? WHERE id=?',nome,especialidade,crm,foto,senha,id);
}

export async function editarUsuario(id,nome,cpf,rg,data_nascimento,senha) {
    await db.runAsync('UPDATE Usuario SET nome=?, cpf=?, rg=?, data_nascimento=?, senha=? WHERE id=?',nome,cpf,rg,data_nascimento,senha,id);
}

export async function deletarMedico(id) {
    await db.runAsync('DELETE FROM Medico WHERE id=?',id);
}

export async function deletarUsuario(id) {
    await db.runAsync('DELETE FROM Usuario WHERE id=?',id);
}

export async function getMedicoByID(id) {
    await db.runAsync('SELECT * FROM Medico WHERE id=?',id);
}

export async function getUsuarioByID(id) {
    await db.runAsync('SELECT * FROM Usuario WHERE id=?',id);
}

export async function getMedicoByNomeSenha(nome,senha) {
    
}

