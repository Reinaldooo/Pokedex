import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("pokemon.db");

export const executeSql = async (sql, params = []) => {
  return new Promise((resolve, reject) => db.transaction(tx => {
    tx.executeSql(sql, params, (_, { rows }) => resolve(rows._array), reject)
  }))
}