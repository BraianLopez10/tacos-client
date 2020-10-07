import React from "react"
import { Route } from "react-router-dom"
import { Section } from "../Layout/Section"

export const SectionRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) => (
        <Section>
          <Component {...props} />
        </Section>
      )}
    />
  )
}
