import React from "react";

import { Players } from "./players";
import { PairedUpGame } from "./pairedupGame";

export function Play(props) {
  return (
    <main className="bg-secondary">
      {/* <Players userName={props.userName} /> */}
      <PairedUpGame userName={props.userName} />
    </main>
  );
}
