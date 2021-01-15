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
  { label: "Furniture", value: 1 },
  { label: "Clothing", value: 2 },
  { label: "Camera", value: 3 },
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
        />
        <AppFormPickerComponent
          items={categories}
          name="category"
          placeholder="Category"
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
