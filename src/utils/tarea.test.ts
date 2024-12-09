import calculateRectangleRoofPanels, { calculateIsoscelesRoofPanels } from "@/utils/tarea";

describe("calculateRectangleRoofPanels", () => {
  test("Calcula correctamente cuando no caben paneles", () => {
    const result = calculateRectangleRoofPanels({
      panelWidth: 4,
      panelHeight: 4,
      roofWidth: 3,
      roofHeight: 10,
    });
    expect(result).toBe(0); 
  });

  test("Calcula correctamente con paneles ajustados", () => {
    const result = calculateRectangleRoofPanels({
      panelWidth: 1,
      panelHeight: 2,
      roofWidth: 2,
      roofHeight: 4,
    });
    expect(result).toBe(4);
  });

  test("Considera paneles rotados", () => {
    const result = calculateRectangleRoofPanels({
      panelWidth: 3,
      panelHeight: 5,
      roofWidth: 10,
      roofHeight: 10,
    });
    expect(result).toBe(6);
  });
});

describe("calculateIsoscelesRoofPanels", () => {
  test("Calcula correctamente los paneles en un techo isósceles", () => {
    const result = calculateIsoscelesRoofPanels({
      panelWidth: 1,
      panelHeight: 1,
      baseWidth: 4,
      height: 4,
    });
    expect(result).toBe(10); // Triángulo de altura 4, con base 4.
  });

  test("Retorna 0 si los paneles no caben", () => {
    const result = calculateIsoscelesRoofPanels({
      panelWidth: 5,
      panelHeight: 5,
      baseWidth: 3,
      height: 2,
    });
    expect(result).toBe(0);
  });
});
2. Pruebas p