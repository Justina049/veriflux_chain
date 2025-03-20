import { Actor, HttpAgent } from "@dfinity/agent";
import { idlFactory } from "../declarations/veriflux_backend"; // Auto-generated from backend
import { canisterId } from "../declarations/veriflux_backend";

// Connect to the Internet Computer backend


if (process.env.DFX_NETWORK === "local") {
    agent.fetchRootKey()
      .then(() => console.log("Local root key fetched"))
      .catch((err) => console.warn("Could not fetch root key:", err));
  }

// const agent = new HttpAgent();
const veriflux_backend = Actor.createActor(idlFactory, { agent, canisterId });

export { veriflux_backend };
