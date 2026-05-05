/**
 * Performance Monitoring Utility
 * Tracks Core Web Vitals and other performance metrics
 */

// Report Web Vitals to console in development
export const reportWebVitals = () => {
  if (typeof window !== "undefined") {
    try {
      // LCP (Largest Contentful Paint)
      const observer = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          if (entry.entryType === "largest-contentful-paint") {
            const lcpEntry = entry as any;
            console.log("LCP:", lcpEntry.renderTime || lcpEntry.loadTime);
          }
        }
      });
      observer.observe({ entryTypes: ["largest-contentful-paint"] });

      // FID (First Input Delay)
      const fidObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const fidEntry = entry as any;
          console.log("FID:", fidEntry.processingDuration);
        }
      });
      fidObserver.observe({ entryTypes: ["first-input"] });

      // CLS (Cumulative Layout Shift)
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((list) => {
        for (const entry of list.getEntries()) {
          const clsEntry = entry as any;
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
            console.log("CLS:", clsValue);
          }
        }
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
    } catch (error) {
      console.warn("Performance monitoring not available");
    }
  }
};

// Prefetch images on hover for better perceived performance
export const prefetchImage = (src: string) => {
  if (typeof window !== "undefined") {
    const img = new Image();
    img.src = src;
  }
};

// Optimize images on-demand
export const getOptimizedImageUrl = (url: string): string => {
  // If using an image CDN like Cloudinary, Imgix, or AWS CloudFront
  // Format: https://cdn.example.com/image.jpg?w=280&q=85&fm=webp
  // For now, return original URL as we're serving locally
  return url;
};
