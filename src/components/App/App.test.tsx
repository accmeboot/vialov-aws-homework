import { MemoryRouter } from "react-router-dom";
import { test } from "vitest";
import App from "~/components/App/App";
import { renderWithProviders } from "~/testUtils";

test("Renders products list", async () => {
  renderWithProviders(
    <MemoryRouter initialEntries={["/"]}>
      <App />
    </MemoryRouter>
  );
});
