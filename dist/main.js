(()=>{"use strict";var t={};(t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})})(t);class o{constructor(t,o,e,r,i){this.title=t,this.description=o,this.dueDate=e,this.projectTitle=r,this.priority=i}}const e=[];let r="";function i(t,r,i,s,n){let l=new o(t,r,i,s,n);e.push(l)}function s(t=t,o){r=o;const e=t.filter((t=>t.projectTitle.includes(r)));return console.log(e),e}i("Winner","Score a TD","Today","Sports","High"),i("Loser","Get Scored On","Tomorrow","Sports","High"),i("Food","Eat a Burger","Tonight","Food","Low"),document.querySelector(".taskList"),console.log(e),s(e,"Sports"),(0,t.displayTasks)(s)})();
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi5qcyIsIm1hcHBpbmdzIjoibUJBQ0EsSSxLQ0F3QixDQUFDQSxJQUNILG9CQUFYQyxRQUEwQkEsT0FBT0MsYUFDMUNDLE9BQU9DLGVBQWVKLEVBQVNDLE9BQU9DLFlBQWEsQ0FBRUcsTUFBTyxXQUU3REYsT0FBT0MsZUFBZUosRUFBUyxhQUFjLENBQUVLLE9BQU8sR0FBTyxFLElDSHZELE1BQU1DLEVBQ1RDLFlBQVlDLEVBQU9DLEVBQWFDLEVBQVNDLEVBQWNDLEdBQ25EQyxLQUFLTCxNQUFRQSxFQUNiSyxLQUFLSixZQUFjQSxFQUNuQkksS0FBS0gsUUFBVUEsRUFDZkcsS0FBS0YsYUFBZUEsRUFDcEJFLEtBQUtELFNBQVdBLENBQ3BCLEVBR0osTUFBTUUsRUFBVyxHQUNqQixJQUFJQyxFQUFpQixHQUVyQixTQUFTQyxFQUFRUixFQUFPQyxFQUFhQyxFQUFTQyxFQUFjQyxHQUN4RCxJQUFJSyxFQUFVLElBQUlYLEVBQUtFLEVBQU9DLEVBQWFDLEVBQVNDLEVBQWNDLEdBQ2xFRSxFQUFTSSxLQUFLRCxFQUNsQixDQUVBLFNBQVNFLEVBQWdCTCxFQUFXQSxFQUFVTSxHQUMxQ0wsRUFBaUJLLEVBQ2pCLE1BQU1DLEVBQWdCUCxFQUFTUSxRQUFPQyxHQUFPQSxFQUFJWixhQUFhYSxTQUFTVCxLQUV2RSxPQURBVSxRQUFRQyxJQUFJTCxHQUNMQSxDQUNYLENBRUFMLEVBQVEsU0FBVSxhQUFjLFFBQVMsU0FBVSxRQUNuREEsRUFBUSxRQUFTLGdCQUFpQixXQUFZLFNBQVUsUUFDeERBLEVBQVEsT0FBUSxlQUFnQixVQUFXLE9BQVEsT0NyQjNCVyxTQUFTQyxjQUFjLGFDTC9DSCxRQUFRQyxJQUFJWixHQUNaSyxFQUFnQkwsRUFBVSxXQUMxQixJQUFBZSxjQUFhVixFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vdG9kby1saXN0L3dlYnBhY2svYm9vdHN0cmFwIiwid2VicGFjazovL3RvZG8tbGlzdC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy90YXNrLmpzIiwid2VicGFjazovL3RvZG8tbGlzdC8uL3NyYy9ET00uanMiLCJ3ZWJwYWNrOi8vdG9kby1saXN0Ly4vc3JjL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIFRoZSByZXF1aXJlIHNjb3BlXG52YXIgX193ZWJwYWNrX3JlcXVpcmVfXyA9IHt9O1xuXG4iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSBcIi4vcHJvamVjdFwiO1xyXG5cclxuZXhwb3J0IGNsYXNzIFRhc2sge1xyXG4gICAgY29uc3RydWN0b3IodGl0bGUsIGRlc2NyaXB0aW9uLCBkdWVEYXRlLCBwcm9qZWN0VGl0bGUsIHByaW9yaXR5KSB7XHJcbiAgICAgICAgdGhpcy50aXRsZSA9IHRpdGxlO1xyXG4gICAgICAgIHRoaXMuZGVzY3JpcHRpb24gPSBkZXNjcmlwdGlvbjtcclxuICAgICAgICB0aGlzLmR1ZURhdGUgPSBkdWVEYXRlO1xyXG4gICAgICAgIHRoaXMucHJvamVjdFRpdGxlID0gcHJvamVjdFRpdGxlO1xyXG4gICAgICAgIHRoaXMucHJpb3JpdHkgPSBwcmlvcml0eTtcclxuICAgIH1cclxufVxyXG5cclxuY29uc3QgdGFza0xpc3QgPSBbXTtcclxubGV0IGN1cnJlbnRQcm9qZWN0ID0gJyc7XHJcblxyXG5mdW5jdGlvbiBuZXdUYXNrKHRpdGxlLCBkZXNjcmlwdGlvbiwgZHVlRGF0ZSwgcHJvamVjdFRpdGxlLCBwcmlvcml0eSkge1xyXG4gICAgbGV0IGFkZFRhc2sgPSBuZXcgVGFzayh0aXRsZSwgZGVzY3JpcHRpb24sIGR1ZURhdGUsIHByb2plY3RUaXRsZSwgcHJpb3JpdHkpO1xyXG4gICAgdGFza0xpc3QucHVzaChhZGRUYXNrKVxyXG59XHJcblxyXG5mdW5jdGlvbiBmaWx0ZXJCeVByb2plY3QodGFza0xpc3QgPSB0YXNrTGlzdCwgcHJvamVjdE5hbWUpIHtcclxuICAgIGN1cnJlbnRQcm9qZWN0ID0gcHJvamVjdE5hbWU7XHJcbiAgICBjb25zdCBmaWx0ZXJQcm9qZWN0ID0gdGFza0xpc3QuZmlsdGVyKHZhbCA9PiB2YWwucHJvamVjdFRpdGxlLmluY2x1ZGVzKGN1cnJlbnRQcm9qZWN0KSk7XHJcbiAgICBjb25zb2xlLmxvZyhmaWx0ZXJQcm9qZWN0KVxyXG4gICAgcmV0dXJuIGZpbHRlclByb2plY3RcclxufVxyXG5cclxubmV3VGFzaygnV2lubmVyJywgJ1Njb3JlIGEgVEQnLCAnVG9kYXknLCAnU3BvcnRzJywgJ0hpZ2gnKTtcclxubmV3VGFzaygnTG9zZXInLCAnR2V0IFNjb3JlZCBPbicsICdUb21vcnJvdycsICdTcG9ydHMnLCAnSGlnaCcpO1xyXG5uZXdUYXNrKCdGb29kJywgJ0VhdCBhIEJ1cmdlcicsICdUb25pZ2h0JywgJ0Zvb2QnLCAnTG93Jyk7XHJcblxyXG5leHBvcnQgeyB0YXNrTGlzdCwgY3VycmVudFByb2plY3QsIGZpbHRlckJ5UHJvamVjdCB9IiwiaW1wb3J0IHsgdGFza0xpc3QsIGN1cnJlbnRUYXNrLCBmaWx0ZXJCeVByb2plY3QsIFRhc2ssIGZpbHRlclByb2plY3QgfSBmcm9tIFwiLi90YXNrXCI7XHJcblxyXG5jb25zdCBjcmVhdGVUYXNrID0gKCkgPT4ge1xyXG4gICAgbGV0IHRhc2tGb3JtQ29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICB0YXNrRm9ybUNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0YXNrRm9ybUNvbnRhaW5lcicpO1xyXG5cclxufVxyXG5cclxubGV0IHRhc2tMaXN0Q29udGFpbmVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnRhc2tMaXN0JylcclxuXHJcbi8qZnVuY3Rpb24gZGlzcGxheVRhc2tzKGxpc3RPZlRhc2tzKSB7XHJcbiAgICBmaWx0ZXJQcm9qZWN0LmZvckVhY2goZWxlbWVudCA9PiB7XHJcblxyXG4gICAgICAgIGxldCB0YXNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgICAgICAgdGFzay5jbGFzc0xpc3QuYWRkKCd0YXNrJyk7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kKHRhc2spO1xyXG5cclxuICAgICAgICBsZXQgdGFza0NoZWNrID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xyXG4gICAgICAgIHRhc2tDaGVjay5jbGFzc0xpc3QuYWRkKCdtYXRlcmlhbC1zeW1ib2xzLW91dGxpbmVkJyk7XHJcbiAgICAgICAgdGFza0NoZWNrLnRleHRDb250ZW50ID0gJ3JhZGlvX2J1dHRvbl91bmNoZWNrZWQnO1xyXG4gICAgICAgIHRhc2suYXBwZW5kKHRhc2tDaGVjaylcclxuXHJcbiAgICAgICAgbGV0IHRhc2tUaXRsZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3AnKTtcclxuICAgICAgICB0YXNrLmNsYXNzTGlzdC5hZGQoJ3Rhc2tUaXRsZScpO1xyXG4gICAgICAgIHRhc2tUaXRsZS50ZXh0Q29udGVudCA9IGVsZW1lbnQudGl0bGU7XHJcbiAgICAgICAgdGFza0xpc3RDb250YWluZXIuYXBwZW5kKHRhc2spO1xyXG4gICAgICAgIGNvbnNvbGUubG9nKCdoaScpXHJcbiAgICB9KTtcclxufSovXHJcblxyXG5cclxuZXhwb3J0IHsgIH0iLCJpbXBvcnQgeyB0YXNrTGlzdCwgZmlsdGVyQnlQcm9qZWN0IH0gZnJvbSAnLi90YXNrJ1xyXG5pbXBvcnQgeyBkaXNwbGF5VGFza3MgfSBmcm9tICcuL0RPTSdcclxuXHJcbmNvbnNvbGUubG9nKHRhc2tMaXN0KVxyXG5maWx0ZXJCeVByb2plY3QodGFza0xpc3QsICdTcG9ydHMnKTtcclxuZGlzcGxheVRhc2tzKGZpbHRlckJ5UHJvamVjdCk7Il0sIm5hbWVzIjpbImV4cG9ydHMiLCJTeW1ib2wiLCJ0b1N0cmluZ1RhZyIsIk9iamVjdCIsImRlZmluZVByb3BlcnR5IiwidmFsdWUiLCJUYXNrIiwiY29uc3RydWN0b3IiLCJ0aXRsZSIsImRlc2NyaXB0aW9uIiwiZHVlRGF0ZSIsInByb2plY3RUaXRsZSIsInByaW9yaXR5IiwidGhpcyIsInRhc2tMaXN0IiwiY3VycmVudFByb2plY3QiLCJuZXdUYXNrIiwiYWRkVGFzayIsInB1c2giLCJmaWx0ZXJCeVByb2plY3QiLCJwcm9qZWN0TmFtZSIsImZpbHRlclByb2plY3QiLCJmaWx0ZXIiLCJ2YWwiLCJpbmNsdWRlcyIsImNvbnNvbGUiLCJsb2ciLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3IiLCJkaXNwbGF5VGFza3MiXSwic291cmNlUm9vdCI6IiJ9