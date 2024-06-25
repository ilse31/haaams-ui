import{f as l}from"./Password-CYiohEhz.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-oqpM-aeu.js";import"./index-l2PZgWEW.js";import"./index-CaNG7YX3.js";import"./index-CE9T9n2a.js";const c={title:"Component/Inputs/Upload",component:l,tags:["autodocs"],argTypes:{accept:{control:"text"},helperText:{control:"text"},id:{control:"text"},label:{control:"text"},maxFiles:{control:"number"},readOnly:{control:"boolean"},hideError:{control:"boolean"},validation:{control:"object"},required:{control:"boolean"},customError:{control:"text"}}},e={args:{helperText:"You can upload file with .png, .jpg, atau .jpeg extension.",label:"Label",maxFiles:1,readOnly:!1,required:!1,hideError:!1,customError:"Image Is Required",validation:n=>n.length>1?"Only one file is allowed":null,id:""}};var r,o,t;e.parameters={...e.parameters,docs:{...(r=e.parameters)==null?void 0:r.docs,source:{originalSource:`{
  args: {
    helperText: "You can upload file with .png, .jpg, atau .jpeg extension.",
    label: "Label",
    maxFiles: 1,
    readOnly: false,
    required: false,
    hideError: false,
    customError: "Image Is Required",
    validation: (files: FileWithPreview[]) => {
      if (files.length > 1) {
        return "Only one file is allowed";
      }
      return null;
    },
    id: ""
  }
}`,...(t=(o=e.parameters)==null?void 0:o.docs)==null?void 0:t.source}}};const d=["Default"];export{e as Default,d as __namedExportsOrder,c as default};
