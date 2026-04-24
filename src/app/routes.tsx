import React from "react";
import { createBrowserRouter } from "react-router";
import { Dashboard } from "./components/dashboard/Dashboard";
import { Login } from "./pages/Login";
import { LoginPage } from "./pages/LoginPage";
import { AccessDeniedPage } from "./pages/AccessDeniedPage";
import { AccountLockoutPage } from "./pages/AccountLockoutPage";
import { Operation } from "./pages/Operation";
import { OperationAddEdit } from "./pages/OperationAddEdit";
import { VoucherIndex } from "./pages/VoucherIndex";
import { VoucherAddEdit } from "./pages/VoucherAddEdit";
import { Inventory } from "./pages/Inventory";
import { InventoryPage } from "./pages/InventoryPage";
import { Accounts } from "./pages/Accounts";
import { AccountsPage } from "./pages/AccountsPage";
import { AppLayout } from "./components/layout/AppLayout";
import { CRM } from "./pages/CRM";
import { CRMPage } from "./pages/CRMPage";
import { Reports } from "./pages/Reports";
import { ReportsPage } from "./pages/ReportsPage";
import { Branches } from "./pages/Branches";
import { BranchesPage } from "./pages/BranchesPage";
import { Settings } from "./pages/Settings";

// Management Pages v3.0
import { BranchManagement } from "./pages/BranchManagement";
import { UnitsManagement } from "./pages/UnitsManagement";
import { TaxManagement } from "./pages/TaxManagement";

// Management Pages v3.5
import { EmployeeManagement } from "./pages/EmployeeManagement";
import { SalesRepManagement } from "./pages/SalesRepManagement";
import { ItemsManagement } from "./pages/ItemsManagement";
import { CostCenterManagement } from "./pages/CostCenterManagement";

// Management Pages v4.0 - FINAL RELEASE
import { DepartmentManagement } from "./pages/DepartmentManagement";
import { CategoryManagement } from "./pages/CategoryManagement";
import { PermissionsManagement } from "./pages/PermissionsManagement";
import { UsersManagement } from "./pages/UsersManagement";
import { CompanyInfo } from "./pages/CompanyInfo";

// Reports v4.0 - FINAL RELEASE
import { InventoryReports } from "./pages/InventoryReports";
import { MaterialMovementReports } from "./pages/MaterialMovementReports";
import { FinancialReports } from "./pages/FinancialReports";

// Reports v5.0 - Sales & Purchase Reports
import { SalesReports } from "./pages/SalesReports";
import { PurchaseReports } from "./pages/PurchaseReports";

// Management v5.0 - Activities & Options
import { ActivitiesManagement } from "./pages/ActivitiesManagement";
import { OptionsManagement } from "./pages/OptionsManagement";

// Enhanced Pages v6.0 - POS & UX Improvements
import { RestaurantPOS } from "./pages/RestaurantPOS";
import { InvoiceEnhanced } from "./pages/InvoiceEnhanced";
import { VoucherEnhanced } from "./pages/VoucherEnhanced";

// Full Screen Creation Pages v9.0
import { InvoiceCreate } from "./pages/InvoiceCreate";
import { PurchaseCreate } from "./pages/PurchaseCreate";
import { VoucherCreate } from "./pages/VoucherCreate";
import { SalesInvoiceTabs } from "./pages/SalesInvoiceTabs";
import { SalesEnhanced } from "./pages/SalesEnhanced";

export const router = createBrowserRouter([
  {
    path: "/login",
    Component: LoginPage,
  },
  {
    path: "/access-denied",
    Component: AccessDeniedPage,
  },
  {
    path: "/account-lockout",
    Component: AccountLockoutPage,
  },
  {
    path: "/",
    Component: AppLayout,
    children: [
      { index: true, Component: Dashboard },

      // Sales Operations
      { path: "sales-invoice", Component: InvoiceEnhanced },
      { path: "sales/invoice", Component: InvoiceEnhanced },
      { path: "sales/invoice/create", Component: InvoiceCreate },
      { path: "sales/invoice/tabs", Component: SalesInvoiceTabs },
      { path: "sales/invoice/enhanced", Component: SalesEnhanced },
      { path: "sales/quotation", Component: Operation },
      { path: "sales/return", Component: Operation },

      // Purchase Operations
      { path: "purchases/purchase-invoice", Component: Operation },
      { path: "purchases/purchase-invoice/create", Component: PurchaseCreate },
      { path: "purchase/invoice", Component: Operation },
      { path: "purchase/order", Component: Operation },
      { path: "purchase/return", Component: Operation },

      // Operations Legacy
      { path: "opr", Component: Operation },
      { path: "opr/addedit", Component: OperationAddEdit },

      // Vouchers
      { path: "vouchers", Component: VoucherEnhanced },
      { path: "vouchers/create", Component: VoucherCreate },
      { path: "vouchers/addedit", Component: VoucherAddEdit },
      { path: "vouchers/receipt", Component: VoucherEnhanced },
      { path: "vouchers/payment", Component: VoucherEnhanced },
      { path: "vouchers/journal", Component: VoucherEnhanced },
      { path: "vouchers/check-payment", Component: VoucherEnhanced },
      { path: "vouchers/check-receipt", Component: VoucherEnhanced },

      // Main Modules
      { path: "inventory", Component: InventoryPage },
      { path: "crm", Component: CRMPage },
      { path: "finance", Component: AccountsPage },
      { path: "accounts", Component: AccountsPage },
      { path: "reports", Component: ReportsPage },
      { path: "branches", Component: BranchesPage },

      // Management Pages
      { path: "management/branches", Component: BranchManagement },
      { path: "management/departments", Component: DepartmentManagement },
      { path: "management/categories", Component: CategoryManagement },
      { path: "management/activities", Component: ActivitiesManagement },
      { path: "management/options", Component: OptionsManagement },
      { path: "management/units", Component: UnitsManagement },
      { path: "management/taxes", Component: TaxManagement },
      { path: "management/employees", Component: EmployeeManagement },
      { path: "management/salesreps", Component: SalesRepManagement },
      { path: "management/items", Component: ItemsManagement },
      { path: "management/costcenters", Component: CostCenterManagement },
      { path: "management/permissions", Component: PermissionsManagement },
      { path: "management/users", Component: UsersManagement },

      // Reports
      { path: "reports/sales", Component: SalesReports },
      { path: "reports/purchases", Component: PurchaseReports },
      { path: "reports/inventory", Component: InventoryReports },
      { path: "reports/movements", Component: MaterialMovementReports },
      { path: "reports/financial", Component: FinancialReports },

      // POS & Enhanced
      { path: "pos/restaurant", Component: RestaurantPOS },
      { path: "invoices/enhanced", Component: InvoiceEnhanced },
      { path: "vouchers/enhanced", Component: VoucherEnhanced },

      // Settings & Company
      { path: "company-info", Component: CompanyInfo },
      { path: "settings", Component: Settings },

      // Fallback
      { path: "*", Component: Dashboard },
    ],
  },
]);
