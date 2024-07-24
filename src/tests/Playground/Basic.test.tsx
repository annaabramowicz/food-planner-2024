// import { render, screen } from "@testing-library/react";
// import { describe, expect, it } from "vitest";
// import Basic from "./Basic";

// describe("Basic", () => {
//   it("its render", () => {
//     render(<Basic />);
//     const element = screen.getByRole("textbox");
//     expect(element).toBeInTheDocument();
//   });
//   it("Login", () => {
//     render(<Basic />);
//     const element = screen.getByRole("button", { name: "Login" });
//     expect(element).toBeInTheDocument();
//   });
//   //error nie umie znaleźć elementu
//   // it("Start learning", () => {
//   //   render(<Basic />);
//   //   const element = screen.getByRole("button", { name: "Start learning" });
//   //   expect(element).toBeInTheDocument();
//   // });

//   //error UMIE znaleźć element, ale asercja nie przechodzi
//   // it("Start learning", () => {
//   //   render(<Basic />);
//   //   const element = screen.queryByRole("button", { name: "Start learning" });
//   //   expect(element).toBeInTheDocument();
//   // powinno byc expect(element).not.toBeInTheDocument();
//   // });

//   //do asychnonicznych, bo potrafi zaczekac
//   // ASYNC AWAIT
//   it("Start learning", async () => {
//     render(<Basic />);
//     const element = await screen.findByRole(
//       "button",
//       {
//         name: "Start learn",
//       },
//       {
//         //deauful jest 1000
//         timeout: 2000,
//       }
//     );
//     expect(element).toBeInTheDocument();
//   });
// });
