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

