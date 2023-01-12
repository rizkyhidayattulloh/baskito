import swal from "sweetalert";
import type { SwalParams } from "sweetalert/typings/core";

export function useSweetAlert() {
  const sweetAlert = (...params: SwalParams) => swal(...params);

  return { sweetAlert };
}
