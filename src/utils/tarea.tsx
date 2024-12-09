interface dimensions{
    panelWidth: number;
    panelHeight: number;
    roofWidth: number;
    roofHeight: number 
  }
  
  export default function calculateRectangleRoofPanels({panelWidth, panelHeight, roofWidth, roofHeight }: dimensions) : number  {
    if (panelHeight > 0 && panelHeight > 0 && roofHeight > 0 && roofHeight > 0 ){

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
    }else{
      return -1
    }
  }
    
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
