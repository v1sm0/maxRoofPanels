interface dimensions{
    panelWidth: number;
    panelHeight: number;
    roofWidth: number;
    roofHeight: number 
  }
  
  export default function calculateRectangleRoofPanels({panelWidth, panelHeight, roofWidth, roofHeight }: dimensions) : number  {
  
    const panelsByWidth = Math.floor(roofWidth / panelWidth);
    const panelsByHeight = Math.floor(roofHeight / panelHeight);
    const totalPanelsOriginal = panelsByWidth * panelsByHeight;
    const remainingWidthOriginal = roofWidth % panelWidth;
    const remainingHeightOriginal = roofHeight % panelHeight;
    const additionalPanelsOriginal = (remainingWidthOriginal >= panelHeight ? Math.floor(roofHeight / panelWidth) : 0) + (remainingHeightOriginal >= panelWidth ? Math.floor(roofWidth / panelHeight) : 0);
  
    const panelsByWidthRotated = Math.floor(roofWidth / panelHeight);
    const panelsByHeightRotated = Math.floor(roofHeight / panelWidth);
    const totalPanelsRotated = panelsByWidthRotated * panelsByHeightRotated;
    const remainingWidthRotated = roofWidth % panelHeight;
    const remainingHeightRotated = roofHeight % panelWidth;
    const additionalPanelsRotated = (remainingWidthRotated >= panelWidth ? Math.floor(roofHeight / panelHeight) : 0) + (remainingHeightRotated >= panelHeight ? Math.floor(roofWidth / panelWidth) : 0);
  
    return Math.max(totalPanelsOriginal + additionalPanelsOriginal, totalPanelsRotated + additionalPanelsRotated);
  }
  
  
  function testCalculateRectangleRoofPanels() {
    
      let result = calculateRectangleRoofPanels({ panelWidth: 4, panelHeight: 4, roofWidth: 3, roofHeight: 10 });
      console.assert(result === 0, `Expected 0, but got ${result}`);
  
    result = calculateRectangleRoofPanels({ panelWidth: 1, panelHeight: 2, roofWidth: 2, roofHeight: 4});
      console.assert(result === 4, `Expected 6, but got ${result}`);
  
    result = calculateRectangleRoofPanels({ panelWidth: 1, panelHeight: 2, roofWidth: 3, roofHeight: 5});
      console.assert(result === 7, `Expected 6, but got ${result}`);
  
    result = calculateRectangleRoofPanels({ panelWidth: 2, panelHeight: 2, roofWidth: 1, roofHeight: 10});
      console.assert(result === 0, `Expected 6, but got ${result}`);
  
      result = calculateRectangleRoofPanels({ panelWidth: 10, panelHeight: 10, roofWidth: 10, roofHeight: 10 });
      console.assert(result === 1, `Expected 1, but got ${result}`);
  
      result = calculateRectangleRoofPanels({ panelWidth: 5, panelHeight: 5, roofWidth: 10, roofHeight: 10 });
      console.assert(result === 4, `Expected 4, but got ${result}`);
  
      result = calculateRectangleRoofPanels({ panelWidth: 5, panelHeight: 10, roofWidth: 10, roofHeight: 10 });
      console.assert(result === 2, `Expected 2, but got ${result}`);
  
      result = calculateRectangleRoofPanels({ panelWidth: 3, panelHeight: 5, roofWidth: 10, roofHeight: 10 });
      console.assert(result === 6, `Expected 6, but got ${result}`);
  }
  
  testCalculateRectangleRoofPanels();
  console.log('All tests passed!');
  
  
  interface isoscelesDimensions {
    panelWidth: number;
    panelHeight: number;
    baseWidth: number;
    height: number;
  }
  
  export function calculateIsoscelesRoofPanels({ panelWidth, panelHeight, baseWidth, height }: isoscelesDimensions): number {
    const panelsByHeight = Math.floor(height / panelHeight);
    let totalPanels = 0;
  
    for (let i = 0; i < panelsByHeight; i++) {
      const currentHeight = height - i * panelHeight;
      const currentBaseWidth = (baseWidth * currentHeight) / height;
      totalPanels += Math.floor(currentBaseWidth / panelWidth);
    }
  
    return totalPanels;
  }
  