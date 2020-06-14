import { Injectable } from "@angular/core";
import {
  compressToEncodedURIComponent,
  decompressFromEncodedURIComponent,
} from "lz-string";

@Injectable({
  providedIn: "root",
})
export class CompressionService {
  compressString(data: string): string {
    return compressToEncodedURIComponent(data);
  }
  compressObject(data: any): string {
    return compressToEncodedURIComponent(JSON.stringify(data));
  }

  decompressString(compressed: string): string {
    return decompressFromEncodedURIComponent(compressed);
  }
  decompressObject(compressed: string): any {
    return JSON.parse(decompressFromEncodedURIComponent(compressed));
  }
}
