import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import MaxPanelsCalculationLayout from "@/app/page";


jest.mock("@/utils/tarea", () => ({
  __esModule: true,
  default: jest.fn(({ panelWidth, panelHeight, roofWidth, roofHeight }) => {
    return Math.floor((roofWidth / panelWidth) * (roofHeight / panelHeight));
  }),
}));

describe("MaxPanelsCalculationLayout", () => {
  test("Renderiza los campos de texto y el botón", () => {
    render(<MaxPanelsCalculationLayout />);

    expect(screen.getByLabelText(/Panel Width/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Panel Height/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Roof Width/i)).toBeInTheDocument();
    expect(screen.getByLabelText(/Roof Height/i)).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /Calculate/i })).toBeInTheDocument();
  });

  test("Muestra el resultado correctamente tras el cálculo", async () => {
    const calculateRectangleRoofPanels = require("@/utils/tarea").default;

    render(<MaxPanelsCalculationLayout />);

    // Simular entrada de datos
    fireEvent.change(screen.getByLabelText(/Panel Width/i), { target: { value: "2" } });
    fireEvent.change(screen.getByLabelText(/Panel Height/i), { target: { value: "1" } });
    fireEvent.change(screen.getByLabelText(/Roof Width/i), { target: { value: "6" } });
    fireEvent.change(screen.getByLabelText(/Roof Height/i), { target: { value: "3" } });

    // Click en "Calculate"
    fireEvent.click(screen.getByRole("button", { name: /Calculate/i }));

    // Verificar que se llamó a la función de cálculo
    expect(calculateRectangleRoofPanels).toHaveBeenCalledWith({
      panelWidth: 2,
      panelHeight: 1,
      roofWidth: 6,
      roofHeight: 3,
    });

    // Verificar que el resultado aparece
    expect(await screen.findByText(/Total Panels: 9/i)).toBeInTheDocument();
  });

  test("Muestra correctamente que no hay paneles si los datos son inválidos", () => {
    render(<MaxPanelsCalculationLayout />);

    // Simular datos inválidos
    fireEvent.change(screen.getByLabelText(/Panel Width/i), { target: { value: "0" } });
    fireEvent.change(screen.getByLabelText(/Panel Height/i), { target: { value: "0" } });

    // Click en "Calculate"
    fireEvent.click(screen.getByRole("button", { name: /Calculate/i }));

    // Verificar que no muestra resultado
    expect(screen.queryByText(/Total Panels:/i)).not.toBeInTheDocument();
  });
});
