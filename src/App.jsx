import React, { useState } from "react";
import { MantineProvider } from "@mantine/core";
import { BrowserRouter } from "react-router-dom";
import { NotificationsProvider } from "@mantine/notifications";
import { ApplicationRouter } from "./Router";
import { LanguageContext } from "./context/userLangctx";

// rect query
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

function App() {
  const queryClient = new QueryClient();
  const [language, setLanguage] = useState("en");
  const value = { language, setLanguage };

  return (
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <LanguageContext.Provider value={value}>
          <MantineProvider
            theme={{
              fontFamily: "'Gentium Book Plus', serif",
              fontWeight: 100,
              headings: {
                fontFamily: "Trade Gothic Next LT Pro BdCn, sans-serif",
                fontWeight: 700,
              },
              colorScheme: "light",
            }}
            withGlobalStyles
            withNormalizeCSS
          >
            <NotificationsProvider position="top-center" limit={5}>
              <ApplicationRouter />
            </NotificationsProvider>
          </MantineProvider>
          <ReactQueryDevtools initialIsOpen={false} />
        </LanguageContext.Provider>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

export default App;
