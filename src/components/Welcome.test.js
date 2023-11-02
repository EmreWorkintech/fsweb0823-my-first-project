import React from "react";
import { render, screen } from "@testing-library/react";
import Welcome from "./Welcome";

test("renders hoş geldin message on Welcome component", async () => {
  // Arrange - Düzenle
  render(<Welcome name="Emre" />);
  // Act - Kullanıcı Etkileşimi
  const greeting = screen.getByText("Merhaba Emre Hoş Geldin!");
  const greeting_v2 = screen.getByText(/merhaba emre/i);
  // Assert - Karşılaştırma - Var saymak
  expect(greeting_v2).toBeInTheDocument();
});
