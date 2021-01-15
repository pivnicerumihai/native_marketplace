import React from "react";
import * as Yup from "yup";
import {
  AppFormComponent,
  AppFormFieldComponent,
  AppFormPickerComponent,
  SubmitButtonComponent,
} from "../components/forms";
import ScreenComponent from "../components/ScreenComponent/ScreenComponent";

const validationSchema = Yup.object().shape({
  title: Yup.string().required().min(5).label("Title"),
  price: Yup.number().required().min(1).max(10000).label("Price"),
  category: Yup.object().required().nullable().label("Category"),
  description: Yup.string().optional().label("Description"),
});

const categories = [
  {
    label: "Furniture",
    icon: "floor-lamp",
    backgroundColor: "#fc5c65",
    value: 1,
  },
  { label: "Cars", icon: "car", backgroundColor: "#fd9644", value: 2 },
  { label: "Camera", icon: "camera", backgroundColor: "#fed330", value: 3 },
  { label: "Games", icon: "cards", backgroundColor: "#26de81", value: 4 },
  {
    label: "Clothing",
    icon: "shoe-heel",
    backgroundColor: "#2bcbba",
    value: 5,
  },
  { label: "Sports", icon: "basketball", backgroundColor: "#45aaf1", value: 6 },
  {
    label: "Movies & Music",
    icon: "headphones",
    backgroundColor: "#4b7bec",
    value: 7,
  },
  {
    label: "Books",
    icon: "book-open-variant",
    backgroundColor: "#bc6ef0",
    value: 8,
  },
  {
    label: "Others",
    icon: "folder-outline",
    backgroundColor: "#787878",
    value: 9,
  },
];

function ListingEditScreen(props) {
  return (
    <ScreenComponent>
      <AppFormComponent
        initialValues={{
          title: "",
          price: "",
          description: "",
          category: null,
        }}
        onSubmit={(values) => console.log(values)}
        validationSchema={validationSchema}
      >
        <AppFormFieldComponent
          name="title"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Title"
          maxLength={255}
        />
        <AppFormFieldComponent
          keyboardType="numeric"
          name="price"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Price"
          width={"40%"}
        />
        <AppFormPickerComponent
          items={categories}
          name="category"
          placeholder="Category"
          width={"50%"}
        />
        <AppFormFieldComponent
          name="description"
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Description"
        />
        <SubmitButtonComponent title="Post" />
      </AppFormComponent>
    </ScreenComponent>
  );
}

export default ListingEditScreen;
