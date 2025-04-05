
import { ChevronRight } from 'lucide-react';
import { Button } from "@/components/ui/button";
import { FrameworkLayerType } from '@/types/framework';
import {
  AlertDialog,
  AlertDialogContent,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogAction,
} from "@/components/ui/alert-dialog";

interface LayerDetailDialogProps {
  selectedLayer: FrameworkLayerType | null;
  onOpenChange: () => void;
}

const LayerDetailDialog = ({ selectedLayer, onOpenChange }: LayerDetailDialogProps) => {
  return (
    <AlertDialog open={!!selectedLayer} onOpenChange={onOpenChange}>
      <AlertDialogContent className="max-w-md">
        <AlertDialogHeader>
          {selectedLayer && (
            <>
              <AlertDialogTitle className="flex items-center gap-2">
                <span 
                  className="text-white text-xs font-semibold rounded-full w-6 h-6 flex items-center justify-center"
                  style={{ backgroundColor: selectedLayer.color }}
                >
                  {selectedLayer.number}
                </span>
                {selectedLayer.title}
              </AlertDialogTitle>
              <AlertDialogDescription className="font-medium text-gray-700">
                {selectedLayer.description}
              </AlertDialogDescription>
            </>
          )}
        </AlertDialogHeader>
        
        {selectedLayer && (
          <div className="bg-gray-50 p-4 rounded-lg my-4">
            <p className="text-gray-600 text-sm leading-relaxed">
              {selectedLayer.detailedDescription}
            </p>
          </div>
        )}
        
        <AlertDialogFooter>
          <AlertDialogAction asChild>
            <Button 
              className="rounded-md text-white flex items-center gap-2"
              style={{ backgroundColor: selectedLayer?.color }}
            >
              Learn More
              <ChevronRight size={16} />
            </Button>
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
};

export default LayerDetailDialog;
