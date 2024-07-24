import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import configureMockStore from "redux-mock-store";
import thunk from "redux-thunk";
import { beforeEach, describe, expect, it } from "vitest";
import Navigation from "../app/Navigation/Navigation";

// vi.mock("../app/Navigation/MobileNavigation/", () => ({
//   default: () => <div>Mobile Navigation</div>,
// }));
// vi.mock("../app/Navigation/TabletDesktopNavigation", () => ({
//   default: () => <div>Tablet Desktop Navigation</div>,
// }));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe("Navigation component", () => {
  let store;

  beforeEach(() => {
    store = mockStore({
      // Wprowadź tutaj initial state Twojego store
      // Dostosuj initial state do tego, co jest wymagane przez Twoje komponenty
      example: {
        data: [],
      },
    });
    window.innerWidth = 1024;
    window.dispatchEvent(new Event("resize"));
  });

  const renderWithRouter = (ui, { route = "/" } = {}) => {
    window.history.pushState({}, "Test page", route);
    return render(
      <Provider store={store}>
        <BrowserRouter>{ui}</BrowserRouter>
      </Provider>
    );
  };

  it("renders MobileNavigation on small screens", () => {
    window.innerWidth = 320;
    window.dispatchEvent(new Event("resize"));
    renderWithRouter(<Navigation />);

    expect(screen.getByText("Mobile Navigation")).toBeInTheDocument();
    expect(
      screen.queryByText("Tablet/Desktop Navigation")
    ).not.toBeInTheDocument();
  });
});
