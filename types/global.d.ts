declare global {
  interface Window { 
    pages: PagesNamespace; 
    formConfig: FormConfig;
  }
}

interface PagesNamespace {
  product: string;
  locale: string; 
  project: string;
}

interface FormConfig {
  /**
   * Form sheet destination URL
   */
  sheet: string;
  /**
   * Redirect path
   */
  redirect: string;
  /**
   * Form config url
   */
  form: string;
}

export {};