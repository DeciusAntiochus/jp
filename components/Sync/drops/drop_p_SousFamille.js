import { DB } from "../../../database/database";

export default function drop_p_SousFamille() {
  return DB.getDatabase().then(db => {
    db.transaction(tx => {
      tx.executeSql(`DELETE FROM p_SousFamille`);
    });
  });
}
