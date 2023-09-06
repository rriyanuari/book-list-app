// import React, { useEffect, useRef } from "react";
// import bootstrap from "bootstrap"; // Pastikan Anda mengimpor Bootstrap sesuai dengan konfigurasi proyek Anda

// const TooltipComponent = ({
//   content,
//   placement = "right",
//   trigger = "hover",
//   children,
// }) => {
//   const tooltipRef = useRef();

//   useEffect(() => {
//     const tooltip = new bootstrap.Tooltip(tooltipRef.current, {
//       title: content,
//       placement,
//       trigger,
//     });

//     return () => {
//       tooltip.dispose();
//     };
//   }, [content, placement, trigger]);

//   return <div ref={tooltipRef}>{children}</div>;
// };

// export default TooltipComponent;
